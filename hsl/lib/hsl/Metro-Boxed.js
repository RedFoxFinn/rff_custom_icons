import React from 'react';
import '../Colors.css';

const MetroBoxed = ({className, heightStyle}) => {
  return (
    <svg height={heightStyle} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path className='Metro' d="M871.036 993.287H154.225c-67.864 0-122.883-55.015-122.883-122.883V153.593c0-67.864 55.015-122.883 122.883-122.883h716.811c67.864 0 122.883 55.015 122.883 122.883v716.811c0 67.868-55.018 122.883-122.883 122.883z"/>
      <path className='White' d="M732.237 401.243v-21.037c0-1.252 2.505-2.473 5.009-2.473v504.921h156.056V141.347h-230.28L518.296 647.521l-2.504 34.655h-3.788l-3.788-34.655-144.692-506.174H131.96v741.307h158.56V377.733c1.253 0 3.789 1.22 3.789 2.473v21.037l140.936 481.411h154.773l142.22-481.411z"/>
    </svg>
  )
};

export default MetroBoxed