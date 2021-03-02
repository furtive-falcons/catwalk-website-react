import React from 'react';
import LinkTagStyles from './styles';

const LinkTag = ({ children , size }) => <LinkTagStyles size={size} href="/#">{children}</LinkTagStyles>;

export default LinkTag;
