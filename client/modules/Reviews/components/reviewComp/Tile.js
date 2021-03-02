import React from 'react';
import { TileContainer } from './styles.js';

const Tile = ({ id }) => (
  <TileContainer id="tile">
    {id}
  </TileContainer>
);

export default Tile;
