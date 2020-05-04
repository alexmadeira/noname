import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import Facing from './Control/Facing';
import { Container } from './styles';

function Character() {
  const { directions, direction, step } = useSelector(state => state.facing);
  const { position } = useSelector(state => state.walk);

  return (
    <Container facing={directions[direction]} walk={step} position={position}>
      <Facing />
    </Container>
  );
}

export default memo(Character);
