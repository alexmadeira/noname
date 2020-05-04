import styled from 'styled-components';

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
