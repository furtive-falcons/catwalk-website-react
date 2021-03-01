import React from 'react';
import Button from '../../../../../../components/Button';
// /Users/shayrosner/Documents/FEC/catwalk-website-react/client/modules/Compare/components/Carousel/components/LeftButton/LeftButton.js
const LeftButton = () => {
  const handleOnClick = () => {
    console.log('Left button was clicked')
  }
    return (
      <>
        <Button handleOnClick={handleOnClick} name='Left Button'/>
      </>
    )
}

export default LeftButton;