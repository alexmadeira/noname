import styled from 'styled-components';

import { WALK_SPACES } from '~/config/Constants';
import { Colors } from '~/styles/Metrics';

export const Container = styled.div`
  background: ${Colors.Black};
  width: 100%;
  height: 100%;
`;

export const Row = styled.div`
  display: flex;
  border-bottom: 1px solid #999;
`;

export const Floor = styled.div`
  height: ${WALK_SPACES}px;
  width: ${WALK_SPACES}px;
  & + div {
    border-left: 1px solid #999;
  }
  opacity: 0.8;
  &.up {
    z-index: 10;
  }

  &.grass01 {
    background: #060;
  }
  &.rock {
    background: #525252;
  }
  &.water {
    background: #00b9f7;
  }
`;
