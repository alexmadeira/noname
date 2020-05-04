import styled from 'styled-components';

import { TILE_SIZE, TILE_ANIMATE_SIZE } from '~/config/Constants';

export const Container = styled.div`
  height: ${TILE_SIZE}px;
  width: ${TILE_SIZE}px;
  background-image: url(${props => (props.position ? props.sprite : '')});
  background-position: calc(
      -${TILE_SIZE}px * ${props => props.position.x + props.step * TILE_ANIMATE_SIZE}
    )
    calc(-${TILE_SIZE}px * ${props => props.position.y});
  &.rock {
    background-color: #525252;
  }
  &.water {
    background-color: #00b9f7;
  }
`;
/*


  &.up {
    z-index: 10;
  } */
