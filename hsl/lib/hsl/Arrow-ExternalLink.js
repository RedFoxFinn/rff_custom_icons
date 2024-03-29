import React from 'react';
import '../Colors.css';

const ArrowExternalLink = ({className, heightStyle}) => {
  return (
    <svg height={heightStyle} viewBox="0 0 283.465 283.632" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path className='HslBlue' fillRule="evenodd" clipRule="evenodd" d="M222.725,253.107V0h26.318c19.011,0,34.421,15.41,34.421,34.421
      v218.686c0,16.766-13.595,30.361-30.357,30.361h-0.024C236.317,283.468,222.725,269.873,222.725,253.107z"/>
      <path className='Metro' fillRule="evenodd" clipRule="evenodd" d="M0,30.385v-0.024C0,13.591,13.591,0,30.357,0h218.686
      c19.011,0,34.421,15.41,34.421,34.421v26.322H30.357C13.591,60.743,0,47.151,0,30.385z"/>
      <path className='Tram' fillRule="evenodd" clipRule="evenodd" d="M51.862,233.135l-1.532-1.532
      c-11.855-11.859-11.855-31.08,0-42.936L218.558,20.442l44.464,44.464L94.797,233.135C82.938,244.99,63.717,244.99,51.862,233.135z"/>
    </svg>
  )
};

export default ArrowExternalLink