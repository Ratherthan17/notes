/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/theme-common/internal';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';
import type {Props} from '@theme/DocItem/Content';

//import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import useBlogPost  from '@docusaurus/plugin-content-blog';
import {usePluralForm} from '@docusaurus/theme-common';


/**
 Title can be declared inside md content or declared through
 front matter and added manually. To make both cases consistent,
 the added title is added under the same div.markdown block
 See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120

 We render a "synthetic title" if:
 - user doesn't ask to hide it with front matter
 - the markdown content does not already contain a top-level h1 heading
*/
function useSyntheticTitle(): string | null {
  const {metadata, frontMatter, contentTitle} = useDoc();
  const shouldRender =
    !frontMatter.hide_title && typeof contentTitle === 'undefined';
  if (!shouldRender) {
    return null;
  }
  return metadata.title;
}

function DocCreatedTime(){
  
  return alert("hskhdlshd")
}


export default function DocItemContent({children}: Props): JSX.Element {
  const syntheticTitle = useSyntheticTitle();

  const { metadata, frontMatter } = useDoc();
  const { date, word_Count, reading_Time } = frontMatter;

  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
      {syntheticTitle && (
        <header>
          <Heading as="h1">{syntheticTitle}</Heading>
        </header>
      )}
      
      {/* {useDoc().metadata.lastUpdatedAt}  */}
      <div className="doc-meta">
        {frontMatter.date && <span>📆 发布时间: {frontMatter.date}</span>}
        {frontMatter.word_count && <span>📄字数: {frontMatter.word_count} 字 </span>}
        {frontMatter.reading_time && <span>⏱️估计阅读时间: {frontMatter.reading_time} 分钟</span>}
    </div>
      <MDXContent>{children}</MDXContent>     
    </div>
    
  );
}
