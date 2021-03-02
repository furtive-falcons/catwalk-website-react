import React from 'react'
import {ReviewCountContainer} from './styles.js';

const ReivewCount= ({count}) => {
  return (
    <ReviewCountContainer id = 'reviewCount'>
      {count} reviews
    </ReviewCountContainer>
  )
}

export default ReivewCount;