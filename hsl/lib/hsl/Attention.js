import React from 'react';
import '../Colors.css';

const Attention = ({className, heightStyle}) => {
  return (
    <svg height={heightStyle} viewBox="0 0 283.46 283.63" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle className='HslHighlightYellow' cx="141.73" cy="141.82" r="141.73"/>
      <path className='Black' d="M118,60.88c-.8-7.73,3.47-13.6,10.67-13.6H154.8c7.2,0,11.47,5.87,10.67,13.6L154,161.15c-.8,7.2-5.6,11.73-12.27,11.73s-11.47-4.53-12.27-11.73Zm23.73,129.6c13.33,0,23.2,9.87,23.2,22.67v.53c0,12.8-9.87,22.67-23.2,22.67s-23.2-9.87-23.2-22.67v-.53C118.53,200.35,128.4,190.48,141.73,190.48Z"/>
    </svg>
  )
};

export default Attention