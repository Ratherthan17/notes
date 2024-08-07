import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


export const MyColor = 
{
  docusaurusGreen:'#25c2a0',
  facebookBlue:'#1877F2',
  yellow:'#ffff50',
  green:'#6abe30',
  red:'#f03c46',
  white:'white',
  black:'black',
  qing:'#f0f5fa'
}


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

/* -------- words --------*/
export function W({children}) {
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

/*----------一级标题---------- */
export function B1({children}) {
  return (
    <span
      style={{
        backgroundColor: '#25c2a0',
        borderRadius: '4px',
        color: 'black',
        padding: '0.2rem',
      }}>
      {children}
    </span>
  )
}

/*----------二级标题---------- */
export function B2({children}) {
  return (
    <span
      style={{
        backgroundColor: '#25c2a0',
        borderRadius: '4px',
        color: 'white',
        padding: '0.2rem',
      }}>
      {children}
    </span>
  )
}

export function PhotoZoom(props){
    return (<p>
            <PhotoProvider  maskOpacity={0.5} speed={() => 600} >
                <PhotoView src={props.src} alt={props.alt} title={props.title}>
                  {props.isCenter? <center><img src={props.src}  style={{cursor: "zoom-in",objectFit: 'cover'}} alt={props.alt} title={props.title}  /></center>:<img src={props.src}  style={{cursor: "zoom-in",objectFit: 'cover'}} alt={props.alt} title={props.title}  />}
                </PhotoView >
            </PhotoProvider>
            </p>)
}

/* export function PhotoZoom({imgSrc,imgTitle,isCenter,imgAlt}){
  return (<p>
          <PhotoProvider  maskOpacity={0.5} speed={() => 600} >
              <PhotoView src={imgSrc} alt={imgAlt} title={imgTitle}>
                {isCenter? <center><img src={imgSrc}  style={{cursor: "pointer",objectFit: 'cover'}} alt={imgAlt} title={imgTitle}  /></center>:<img src={imgSrc}  style={{cursor: "pointer",objectFit: 'cover'}} alt={imgAlt} title={imgTitle}  />}
              </PhotoView >
          </PhotoProvider>
          </p>)
} */