const fs = require('fs');
const path = require('path');
const glob = require('glob');
const readingTime = require('reading-time');
const simpleGit = require('simple-git');

// 使用示例：node calculateMeta.js ./docs/*.md
// node add-metadata.js "./docs/**/*.md"  # 递归处理所有子目录


// 目标元数据字段配置
const TARGET_FIELDS = {
  date: async (filePath) => {
    try {
      const git = simpleGit();
      const logs = await git.log({ file: filePath, '--diff-filter': 'A' });
      const firstCommitDate = logs.all[0]?.date;
      return firstCommitDate 
        ? formatDate(new Date(firstCommitDate)) 
        : formatDate(new Date());
    } catch {
      return formatDate(new Date());
    }
  },
  //last_update_date: (content) => formatDate(new Date()),
  word_count: (content) => content.split(/\s+/).length,
  reading_time: (content) => Math.ceil(content.split(/\s+/).length / 200)
};

// 日期格式化工具
function formatDate(date) {
  const pad = (num) => num.toString().padStart(2, '0');
  const weekdays = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
  return `${date.getFullYear()}年${pad(date.getMonth()+1)}月${pad(date.getDate())}日 ${
    weekdays[date.getDay()]} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

// 核心处理函数
async function processMarkdownFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = '';
  const bodyContent = content.replace(/<!--.*?-->/gs, ''); // 过滤注释

  // 判断元数据区块是否存在
  const metadataMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  
  if (metadataMatch) {
    // 存在元数据时的处理逻辑
    const metadataBlock = metadataMatch[0];
    const metadataBody = metadataMatch[1];
    const metadataLines = metadataBody.split(/\r?\n/);
    
    // 解析现有元数据
    const metadata = {};
    let lastLineIndex = 0;
    metadataLines.forEach((line, index) => {
      const [key, ...values] = line.split(':').map(s => s.trim());
      if (key && values.length) {
        metadata[key] = values.join(':').trim();
        lastLineIndex = index;
      }
    });

    // 更新或添加目标字段
    for (const [field, generator] of Object.entries(TARGET_FIELDS)) {
      const value = typeof generator === 'function' 
        ? field === 'date' 
          ? await generator(filePath)
          : generator(bodyContent)
        : generator;

      if (metadata.hasOwnProperty(field)) {
        // 更新现有字段行
        const lineIndex = metadataLines.findIndex(line => 
          line.startsWith(field + ':')
        );
        if (lineIndex !== -1) {
          metadataLines[lineIndex] = `${field}: ${value}`;
        }
      } else {
        // 插入到最后一个有效行下方
        metadataLines.splice(lastLineIndex + 1, 0, `${field}: ${value}`);
        lastLineIndex++;
      }
    }

    // 重建元数据区块
    newContent = [
      '---',
      ...metadataLines.filter(line => line.trim().length > 0),
      '---',
      content.slice(metadataBlock.length)
    ].join('\n');
  } else {
    // 无元数据区块时的处理逻辑
    const newMetadata = await Promise.all(
      Object.entries(TARGET_FIELDS).map(async ([field, generator]) => {
        const value = typeof generator === 'function' 
          ? field === 'date' 
            ? await generator(filePath)
            : generator(bodyContent)
          : generator;
        return `${field}: ${value}`;
      })
    );

    newContent = [
      '---',
      ...newMetadata,
      '---',
      '\n' + content
    ].join('\n');
  }

  fs.writeFileSync(filePath, newContent);
  console.log(`Processed: ${path.basename(filePath)}`);
}

// 主程序执行
const patterns = process.argv.slice(2);
const files = patterns.flatMap(pattern => 
  glob.sync(pattern, { nodir: true, absolute: true })
);

(async () => {
  for (const file of files) {
    if (path.extname(file) === '.md') {
      await processMarkdownFile(file);
    }
  }
})();