import React from 'react';
import '../Colors.css';

const MapLayers = ({className, heightStyle}) => {
  return (
    <svg height={heightStyle} viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <polygon className='HslBlue' points="24.4103768 6.15157169 12.2117188 0.0326516544 0.0130606618 6.15157169 12.2117188 12.2770221"/>
      <polygon className='HslGreen' points="12.2117187 15.0067004 3.38924173 10.5921967 0.0195909926 12.2770221 12.2117187 18.4024724 24.4038465 12.2770221 21.0407261 10.5921967"/>
      <polygon className='HslPink' points="12.2117187 21.1452114 3.38924173 16.7111167 0.0195909926 18.4024724 12.2117187 24.5213925 24.4038465 18.4024724 21.0407261 16.7111167"/>
    </svg>
  )
};

export default MapLayers