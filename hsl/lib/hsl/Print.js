import React from 'react';
import '../Colors.css';

const Print = ({className, heightStyle}) => {
  return (
    <svg height={heightStyle} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path className='HslBlue' d="M941.425 198.532h-858.851c-45.416 0-82.585 34.322-82.585 76.274v250.791c0 39.904 37.169 72.55 82.585 72.55h84.626l3.551-88.199c0-46.027 36.219-83.673 80.487-83.673h525.33c36.866 0 68.074 26.147 77.499 61.467l-0.022 109.495-171.251 0.213c-59.198 0-113.859 57.63-113.859 113.855v170.803l-283.502 0.863c-32.397 0-58.754-30.468-58.754-67.911l-5.35-134.259c0-14.439-11.448-26.144-25.573-26.144s-25.577 11.701-25.577 26.144v144.627c0 62.485 49.715 113.306 110.828 113.306l323.034 0.029c6.575 0 12.875-2.475 17.524-6.885l289.044-274.55c4.646-4.422 7.258-10.408 7.258-16.643v-51.373h23.561c45.42 0 82.585-35.309 82.585-78.449v-236.059c-0.007-41.948-37.169-76.271-82.589-76.271zM142.022 369.234c-15.758 0-28.528-12.709-28.528-28.394 0-15.678 12.77-28.387 28.528-28.387s28.535 12.709 28.535 28.387c-0.004 15.682-12.777 28.394-28.535 28.394zM255.61 369.234c-15.754 0-28.528-12.709-28.528-28.394 0-15.678 12.774-28.387 28.528-28.387 15.758 0 28.535 12.709 28.535 28.387 0 15.682-12.774 28.394-28.535 28.394zM624.688 862.337v-147.134c0-30.28 25.931-54.914 57.804-54.914h154.908l-212.711 202.047zM751 85.241h-477.999c-49.82 0-91.718 24.023-103.209 56.323h684.414c-11.481-32.299-53.389-56.323-103.206-56.323z"/>
    </svg>
  )
};

export default Print