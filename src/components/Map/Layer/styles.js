import styled from 'styled-components';

import { TILE_SIZE, TILE_ANIMATE_SIZE } from '~/config/Constants';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-image: url(${props => (props.position ? props.sprite : '')});
  background-position: calc(
      -${TILE_SIZE}px * ${props => props.position.x + props.step * TILE_ANIMATE_SIZE}
    )
    calc(-${TILE_SIZE}px * ${props => props.position.y});
  &.up {
    z-index: 15;
  }
`;
