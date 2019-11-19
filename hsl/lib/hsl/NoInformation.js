import React from 'react';
import '../Colors.css';

const NoInformation = ({className, heightStyle}) => {
  return (
    <svg height={heightStyle} viewBox="0 0 24 24" enableBackground="new 0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle className='HslGreyLight' cx="12" cy="12" r="12"/>
      <path className='HslHighlightYellow' opacity="0.1" d="M12,2c5.514,0,10,4.486,10,10s-4.486,10-10,10S2,17.514,2,12S6.486,2,12,2 M12,0C5.373,0,0,5.373,0,12
        s5.373,12,12,12s12-5.373,12-12S18.627,0,12,0L12,0z"/>
      <path className='HslHighlightYellow' d="M11.542,14.736c-0.414,0-0.72-0.306-0.774-0.72l-0.18-1.548c-0.072-0.486,0.216-0.846,0.702-0.9
        c1.692-0.162,2.629-0.81,2.629-1.945V9.586c0-1.008-0.774-1.71-2.07-1.71c-0.955,0-1.729,0.342-2.449,0.99
        C9.22,9.01,8.985,9.118,8.733,9.118c-0.559,0-1.009-0.45-1.009-0.99c0-0.27,0.108-0.558,0.36-0.774
        c0.954-0.9,2.161-1.494,3.817-1.494c2.521,0,4.231,1.404,4.231,3.655V9.55c0,2.269-1.639,3.295-3.638,3.637l-0.071,0.828
        c-0.072,0.396-0.36,0.72-0.774,0.72H11.542z M11.542,16.05c0.738,0,1.278,0.54,1.278,1.242v0.18c0,0.702-0.54,1.242-1.278,1.242
        s-1.278-0.54-1.278-1.242v-0.18C10.264,16.59,10.804,16.05,11.542,16.05z"/>
    </svg>
  )
};

export default NoInformation