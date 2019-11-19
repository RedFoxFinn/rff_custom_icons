import React from 'react';
import '../Colors.css';

const Airplane = ({className, heightStyle}) => {
  return (
    <svg height={heightStyle} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path className='HslSininen' d="M958.708 768.336v-113.4l-373.992-266.216v-316.058c0-40.124-32.545-72.673-72.77-72.673-40.12 0-72.669 32.545-72.669 72.673v311.141l-373.984 271.129v113.4l380.642-149.023 18.319 257.412-104.293 78.81v68.471l152.603-47.389 152.603 47.389v-68.471l-105.42-78.912 18.319-257.311 380.642 149.027z"/>
    </svg>
  )
};

export default Airplane