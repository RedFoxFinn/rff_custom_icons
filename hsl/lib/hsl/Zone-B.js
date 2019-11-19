import React from 'react';
import '../Colors.css';

const ZoneB = ({className, heightStyle}) => {
  return (
    <svg height={heightStyle} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle className='HslBlue' cx="11" cy="11" r="11" />
      <path className='White' d="M6 5.415A1.14 1.14 0 0 1 7.155 4.26h4.695c1.5 0 2.66.41 3.405 1.155.58.566.898 1.35.875 2.16v.035a3.11 3.11 0 0 1-1.84 2.89c1.525.5 2.59 1.395 2.59 3.165v.035c0 2.33-1.92 3.575-4.825 3.575h-4.88A1.135 1.135 0 0 1 6 16.14V5.415zm5.385 4.34c1.47 0 2.455-.58 2.455-1.77V7.95c0-1.025-.82-1.66-2.29-1.66H8.275v3.465h3.11zm.67 5.5c1.56 0 2.5-.615 2.5-1.785v-.04c0-1.095-.875-1.75-2.68-1.75h-3.6v3.575h3.78z"/>
    </svg>
  )
};

export default ZoneB