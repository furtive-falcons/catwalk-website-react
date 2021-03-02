import { node, string } from 'prop-types';
import React from 'react';
import ParagraphStyles from './styles';

const Paragraph = ({ children , className }) => (
  <ParagraphStyles className={className} id="Paragraph">{children}</ParagraphStyles>
);

Paragraph.propTypes = {
  children : node,
  className : string
}

Paragraph.defaultProps = {
  children: null,
  className : null
}

export default Paragraph;
