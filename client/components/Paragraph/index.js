import React from 'react';
import { ParagraphStyles } from './styles';

const Paragraph = ({ children }) => {
    return (
        <ParagraphStyles id="Paragraph">
            {children}
        </ParagraphStyles>
    )
}

export default Paragraph;
