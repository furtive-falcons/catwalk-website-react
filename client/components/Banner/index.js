import React from 'react';

import { fontSizeSmall } from '../../ui/ui-fonts';
import LinkTag from '../LinkTag';
import Paragraph from '../Paragraph';
import DivStyles from './styles';

const Banner = () => {
  const paragraph = 'site - wide announcement message! ― ';
  const saleText = ' sale / discount ';
  const actionText = 'new product highlight';
  const offerText = ' offer ― ';
  return (
    <DivStyles>
      <Paragraph size={fontSizeSmall}>
        {paragraph}
        <span>{saleText}</span>
        <strong>{offerText}</strong>
        <LinkTag>{actionText}</LinkTag>
      </Paragraph>
    </DivStyles>
  );
};

export default Banner;
