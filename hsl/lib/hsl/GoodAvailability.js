import React from 'react';
import '../Colors.css';

const GoodAvailability = ({className, heightStyle}) => {
  return (
    <svg height={heightStyle} viewBox="0 0 24 24" enableBackground="new 0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle className='HslGreen' cx="12" cy="12" r="12"/>
      <path className='Tram' opacity="0.1" d="M12,2c5.514,0,10,4.486,10,10s-4.486,10-10,10S2,17.514,2,12S6.486,2,12,2 M12,0C5.373,0,0,5.373,0,12
        s5.373,12,12,12s12-5.373,12-12S18.627,0,12,0L12,0z"/>
      <polygon className='White' points="10.628,16.53 6.386,12.287 7.8,10.873 10.628,13.702 16.992,7.338 18.406,8.752 "/>
    </svg>
  )
};

export default GoodAvailability