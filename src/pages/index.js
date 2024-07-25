import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import WebIcon from '../../static/img/LogoIcon/WebIcon.png';
import img from '../../static/img/LogoIcon/docusaurus.png';
/*
1. 和index.js 同级目录(pages) 用./XX.png
2. 是index.js 上级目录(src) 用../XX.png
3. 在 notes 下的，用 ../../XX.png
4. 在static/img 下的，用 ../../static/img/XX.png

*/



import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container"
      style={{
         // display: 'flex',
          justifyContent: 'center',
          //alignItems: 'center',
          height: '50vh',
         // ontSize: '20px',
        }}>

         <div 
         style={{
          position: 'absolute',
          top: '50%',
           left: '50%',
         transform: 'translate(-50%, -50%)',

         }}>
            <img src={WebIcon} alt="logo" width="100" height="100" />
            <h1 className="hero__title">Zhang的学习笔记</h1>
            
            <p className="hero__subtitle">知识库</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                进入
              </Link>
            </div>
          </div>       
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
