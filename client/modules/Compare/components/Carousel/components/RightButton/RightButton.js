import React from 'react';
import Button from '../../../../../../components/Button';

const RightButton = () => {
  const handleOnClick = () => {
    console.log('Right button was clicked')
  }

    return (
      <>
        <Button handleOnClick={handleOnClick} name='Right Button'/>
    </>
    )
}

export default RightButton;