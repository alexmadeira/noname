import styled from 'styled-components';

import { TILE_SIZE } from '~/config/Constants';
import { Colors } from '~/styles/Metrics';

export const Row = styled.div`
  display: flex;
`;

export const Container = styled.div`
  background: ${Colors.Black};
  width: 100%;
  height: 100%;
  background-image: url(${props => props.base});
  &.dev- {
    ${Row} {
      & > div {
        border: 1px solid #999;
      }
    }
  }
`;

export const Tile = styled.div`
  height: ${TILE_SIZE}px;
  width: ${TILE_SIZE}px;
  position: relative;
  &.rock {
    background-color: #525252;
  }
  &.water {
    background-color: #00b9f7;
  }
`;
