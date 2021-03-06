import React from 'react';
import {
  arrayOf, func, number, shape,
} from 'prop-types';
import Paragraph from '../Paragraph';
import { fontSizeBase } from '../../ui/ui-fonts';
import StyleIcon from './components/StyleIcon';
import StyleWrapper from './styles';

const StyleSelector = ({ styles, selectedStyle, setSelectedStyle }) => {
  const renderStyleIcon = ({ photos, style_id: styleId }, index) => (
    <StyleIcon
      isSelected={index === selectedStyle}
      key={styleId}
      thumbnail={photos[0].thumbnail_url}
      handleOnClick={() => setSelectedStyle(index)}
    />
  );
  return (
    <>
      <Paragraph size={fontSizeBase}>
        <strong>Style &gt;</strong>
        {' '}
        {styles[selectedStyle].name}
      </Paragraph>
      <StyleWrapper>{styles.map(renderStyleIcon)}</StyleWrapper>
    </>
  );
};

StyleSelector.propTypes = {
  selectedStyle: number,
  setSelectedStyle: func,
  styles: arrayOf(shape({})),
};

StyleSelector.defaultProps = {
  selectedStyle: null,
  setSelectedStyle: Function.prototype,
  styles: null,
};

export default StyleSelector;
