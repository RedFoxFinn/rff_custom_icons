import React from 'react';
import '../Colors.css';

const Edit = ({className, heightStyle}) => {
  return (
    <svg height={heightStyle} viewBox="0 0 283.465 283.632" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path className='Train' d="M234.931,8.371c-5.44-5.44-12.92-8.16-20.059-8.16c-7.14,0-14.619,2.72-20.059,8.16L47.938,155.246
        l80.237,80.237L275.05,88.608c11.22-11.22,11.22-28.899,0-40.119L234.931,8.371z"/>
      <polygon className='Metro' points="107.096,254.522 28.899,176.325 0,283.421 		"/>
    </svg>
  )
};

export default Edit