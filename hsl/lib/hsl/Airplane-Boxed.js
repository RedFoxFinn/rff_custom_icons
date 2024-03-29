import React from 'react';
import '../Colors.css';

const AirplaneBoxed = ({className, heightStyle}) => {
  return (
    <svg height={heightStyle} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path className='HslBlue' d="M0.043 126.755c0-69.114 57.594-126.709 126.709-126.709h767.931c71.676 0 129.27 57.594 129.27 126.709v767.931c0 71.672-57.594 129.27-129.27 129.27h-767.928c-69.114 0-126.709-57.594-126.709-129.27v-767.931z"/>
      <path className='White' d="M861.495 712.552v-88.723l-292.602-208.279v-247.276c0-31.393-25.465-56.857-56.933-56.857-31.389 0-56.854 25.465-56.854 56.857v243.432l-292.598 212.123v88.723l297.804-116.59 14.331 201.393-81.596 61.658v53.57l119.393-37.075 119.393 37.075v-53.57l-82.477-61.738 14.331-201.314 297.807 116.59z"/>
    </svg>
  )
};

export default AirplaneBoxed