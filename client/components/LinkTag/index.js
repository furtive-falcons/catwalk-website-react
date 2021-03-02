import React from 'react';
import WithMargins from '../../hoc/with-margins';
import LinkTagStyles from './styles';

const LinkTag = ({ children , size }) => <LinkTagStyles size={size} href="/#">{children}</LinkTagStyles>;

export default LinkTag;