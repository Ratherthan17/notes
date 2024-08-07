import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import BStyles from '@site/src/css/MyCss.module.css';

export const MyColor = 
{
  docusaurusGreen:'#25c2a0',
  facebookBlue:'#1877F2',
  yellow:'#ffff50',
  green:'#6abe30',
  red:'#f03c46',
  white:'white',
  black:'black',
  qing:'#f0f5fa',
  Purple: '#5c62d5',
}


/*********************************************************************************
 * 改自 docusaurus 文档 MDX 和 React 一节中的高亮代码
 * 功能：为文字加上背景色，并设置字体颜色  
 ********************************************************************************/
export function Highlight({children, bgColor,fontColor}) {
  return (
    <span
      style={{
        backgroundColor: bgColor,
        borderRadius: '4px',
        color: fontColor,
        padding: '0.2rem',
      }}>
      {children}
    </span>
  )
}


/**********************************************************************************
* 功能：高亮某个词
* 其他：light 和 W 效果一样(现在不一样了我换了颜色)，我一开始写的时候，用的 light ，后来嫌 light 太长了，就改成 W，
*       W 是 Word 的缩写
***********************************************************************************/
export function W({children}) {
  return (
    <span className={BStyles.W}
      style={{
       /*  backgroundColor: '#f0f5fa',
        borderRadius: '4px', */
        // color: '#5c62d5',
        padding: '0.2rem',
      }}>
      {children}
    </span>
  )
}

export function Light({children}) {
  return (
    <span
      style={{
        backgroundColor: '#f0f5fa',
        borderRadius: '4px',
        color: '#25c2a0',
        padding: '0.2rem',
      }}>
      {children}
    </span>
  )
}


/*************************************************************************************
* 功能：为二级标题左边加一小块背景色
* 其他：H2 是标签的关键字，所以改成了 B2
*************************************************************************************/
export function B2({children}) {
  return (
    <span
      className={BStyles.B2}>
      {children}
    </span>
  )
}

/* export function B2({children}) {
  return (
    <span
      style={{
        backgroundColor: MyColor.docusaurusGreen,
        borderRadius: '4px',
        color: MyColor.white,
        padding: '0.2rem',
      }}>
      {children}
    </span>
  )
} */


/*************************************************************************************
* 功能：三级标题样式
* B3：为无数字的设置，左边加一小块背景色
* BH3：为有数字的设置，为文字加背景色
* B3W：设置文字颜色为 docusaurusGreen
* 其他：H3 是标签的关键字，所以改成了 B3
*************************************************************************************/
export function B3({children}) {
  return (
    <span
      className={BStyles.B3}>
      <span style={{marginRight: '1.2rem'}}/>{children}
    </span>
    
  )
}

export function BH3({children}) {
  return (
    <span className={BStyles.BH3}
      style={{        
        padding: '0.2rem',
        color: 'white',
      }}>
      {children}
    </span>
  )
}

export function B3W({children}) {
  return (
    <span
      style={{
        borderRadius: '4px',
        color: MyColor.docusaurusGreen,
        padding: '0.2rem',
      }}>
      {children}
    </span>
  )
}



/**************************************************************************************
 * 功能：图片点击放大
 * 参数：src：图片地址，alt：图片描述，title：图片标题，isCenter：是否居中显示
 **************************************************************************************/
export function PhotoZoom(props){
    return (<p>
            <PhotoProvider  maskOpacity={0.5} speed={() => 600} >
                <PhotoView src={props.src} alt={props.alt} title={props.title}>
                  {props.isCenter? <center><img src={props.src}  style={{cursor: "zoom-in",objectFit: 'cover'}} alt={props.alt} title={props.title}  /></center>:<img src={props.src}  style={{cursor: "zoom-in",objectFit: 'cover'}} alt={props.alt} title={props.title}  />}
                </PhotoView >
            </PhotoProvider>
            </p>)
}


/***
 * 功能：把图片框起来
 */
export function PhotoBox(props){
    return (
      <div class="card-demo" style={{margin: '10px',padding: '10px',borderRadius: '10px',boxShadow: '0 0 10px rgba(0,0,0,0.1)' ,border: '2px solid #5c62d5' }}>
          <div class="card">                          
              <img
                src={props.src}
                alt={props.alt}
                title={props.title} />        
           </div>
    </div>     
    )
}