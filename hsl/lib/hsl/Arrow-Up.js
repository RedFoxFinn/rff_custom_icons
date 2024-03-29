import React from 'react';
import '../Colors.css';

const ArrowUp = ({className, heightStyle}) => {
  return (
    <svg height={heightStyle} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path className='Train' d="M1004.962 468.74c24.525 24.525 24.525 63.36 0 89.933-26.574 24.525-65.404 24.525-89.933 0l-341.338-341.338v743.995c0 34.745-28.618 63.363-63.363 63.363s-63.36-28.618-63.36-63.363v-743.995l-339.297 341.338c-24.525 24.525-65.404 24.525-89.933 0-24.525-26.574-24.525-65.404 0-89.933l447.622-449.67c4.086-2.041 20.44-18.395 44.965-18.395s40.879 16.354 44.965 18.395l449.673 449.67z"/>
    </svg>
  )
};

export default ArrowUp