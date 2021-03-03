import React from 'react';
import Paragraph from '../Paragraph';
import Title from '../Title';

const Slogan = () => (
  <>
    <Title>Product Slogan. Pithy Description or Catchphrase</Title>
    <Paragraph>
      You’ve probably heard of Lorem Ipsum before – it’s the most-used dummy
      text excerpt out there. People use it because it has a fairly normal
      distribution of letters and words (making it look like normal English),
      but it’s also Latin, which means your average reader won’t get distracted
      by trying to read it.
      {' '}
      <br />
      <br />
      It’s perfect for showcasing design work as it should look when fleshed out
      with text, because it allows viewers to focus on the design work itself,
      instead of the text. It’s also a great way to showcase the functionality
      of programs like word processors, font types, and more.
    </Paragraph>
    <br />
    <Paragraph>
      {' '}
      It’s perfect for showcasing design work as it should look when fleshed out
      with text, because it allows viewers to focus on the design work itself,
      instead of the text.
    </Paragraph>
  </>
);

export default Slogan;
