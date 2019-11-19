import React from 'react';
import '../Colors.css';

const ZoneA = ({className, heightStyle}) => {
  return (
    <svg height={heightStyle} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle className='HslBlue' cx="11" cy="11" r="11" />
      <path className='White' d="M8.785 12.076l2.273-5.253 2.273 5.253H8.785zm8.52 3.676L12.14 4.184c-.41-.919-1.707-.919-2.118 0L4.867 15.752c-.092.185-.148.352-.148.52 0 .593.462 1.057 1.054 1.057.48 0 .868-.26 1.053-.723l1.09-2.506H14.2l1.054 2.431c.203.483.573.798 1.109.798.61 0 1.071-.482 1.071-1.095a.997.997 0 0 0-.129-.482z" />
    </svg>
  )
};

export default ZoneA