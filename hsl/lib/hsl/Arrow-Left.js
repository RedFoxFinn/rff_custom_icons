import React from 'react';
import '../Colors.css';

const ArrowLeft = ({className, heightStyle}) => {
  return (
    <svg height={heightStyle} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path className='Kaupunkifillari' d="M19.016 556.632c-2.045-4.089-18.398-20.44-18.398-44.968 0-24.525 16.354-40.875 18.398-44.965l449.666-447.629c24.529-24.525 63.363-24.525 89.937 0 24.525 24.529 24.525 65.404 0 89.937l-341.342 339.293h743.999c34.745 0 63.36 28.615 63.36 63.36 0 34.749-28.615 63.363-63.36 63.363h-743.999l341.342 341.338c24.525 24.525 24.525 63.36 0 89.933-26.574 24.525-65.404 24.525-89.937 0l-449.666-449.663z"/>
    </svg>
  )
};

export default ArrowLeft