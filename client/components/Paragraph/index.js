import { node, number, string } from 'prop-types';
import React from 'react';
import { fontSizeSmaller } from '../../ui/ui-fonts';
import ParagraphStyles from './styles';

const Paragraph = ({ children , className, size }) => (
  <ParagraphStyles size={size} className={className} id="Paragraph">{children}</ParagraphStyles>
);

Paragraph.propTypes = {
  children : node,
  className : string,
  size: number
}

Paragraph.defaultProps = {
  children: null,
  className : null,
  size: fontSizeSmaller
}

export default Paragraph;
