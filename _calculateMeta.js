// add-metadata.js
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const readingTime = require('reading-time');
const simpleGit = require('simple-git'); // 使用 simple-git 替代 execSync

// 星期映射表
const WEEKDAY_ZH = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

// 配置参数
const METADATA_FIELDS = {
  date: async (filePath) => {
    try {
      const git = simpleGit();
      const logs = await git.log({
        file: filePath,
        '--diff-filter': 'A', // 仅查找添加文件的提交
        format: { date: '%aI' } // ISO 8601 格式日期
      });

      // 获取首次提交日期
      const firstCommitDate = logs.all[0]?.date;
      if (firstCommitDate) {
        const date = new Date(firstCommitDate);
        return formatChineseDate(date);
      }

      // 无 Git 记录时使用当前时间
      return formatChineseDate(new Date());
    } catch (error) {
      return formatChineseDate(new Date());
    }
  },
  word_count: (content) => content.split(/\s+/).length,
  reading_time: (content) => Math.round(content.split(/\s+/).length / 200)//四舍五入
};

// 日期格式化函数
function formatChineseDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  return `${year}年${month}月${day}日 ${WEEKDAY_ZH[date.getDay()]} ${hours}:${minutes}:${seconds}`;
}

// 文件处理逻辑
async function processMarkdownFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const metadataRegex = /^---\n([\s\S]*?)\n---/;
  const match = content.match(metadataRegex);

  let newMetadata = {};
  let bodyContent = content;

  // 解析现有元数据
  if (match) {
    bodyContent = content.slice(match[0].length);
    match[1].split('\n').forEach(line => {
      const [key, ...values] = line.split(':');
      if (key && values.length) {
        newMetadata[key.trim()] = values.join(':').trim();
      }
    });
  }

  // 计算新元数据
  const bodyForAnalysis = bodyContent.replace(/<!--.*?-->/gs, '');
  for (const [key, fn] of Object.entries(METADATA_FIELDS)) {
    newMetadata[key] = typeof fn === 'function' 
      ? key === 'date' 
        ? await fn(filePath)  // 异步获取日期
        : fn(bodyForAnalysis) 
      : fn;
  }

  // 构建元数据块
  const metadataLines = ['---'];
  Object.entries(newMetadata).forEach(([key, value]) => {
    metadataLines.push(`${key}: ${value}`);
  });
  metadataLines.push('---');

  fs.writeFileSync(filePath, metadataLines.join('\n') + bodyContent);
  console.log(`Updated: ${path.basename(filePath)}`);
}

// 主程序
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