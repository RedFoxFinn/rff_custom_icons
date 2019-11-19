import React from 'react';
import '../Colors.css';

const Ellipsis = ({className, heightStyle}) => {
  return (
    <svg height={heightStyle} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path className='Train' d="M-0.007 512.921v-1.846c0-66.474 56.315-120.018 120.943-120.018 63.703 0 120.939 53.545 120.939 120.018v1.846c0 66.474-54.469 120.018-120.939 120.018-66.474 0-120.943-53.545-120.943-120.018z"/>
      <path className='Tram' d="M391.061 512.921v-1.846c0-66.474 56.315-120.018 120.943-120.018 63.703 0 120.939 53.545 120.939 120.018v1.846c0 66.474-54.469 120.018-120.939 120.018-66.474 0-120.943-53.545-120.943-120.018z"/>
      <path className='Metro' d="M782.125 512.921v-1.846c0-66.474 56.315-120.018 120.943-120.018 63.703 0 120.939 53.545 120.939 120.018v1.846c0 66.474-54.469 120.018-120.939 120.018s-120.943-53.545-120.943-120.018z"/>
    </svg>
  )
};

export default Ellipsis