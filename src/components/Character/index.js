import React, { useEffect, useState, useCallback, memo } from 'react';
import { useSelector } from 'react-redux';

import { WALK_STEPS } from '~/config/Constants';

import Facing from './Control/Facing';
import { Container } from './styles';

function Character() {
  const [animationStap, setAnimationStap] = useState(3);
  const { directions, direction } = useSelector(state => state.facing);
  const { position } = useSelector(state => state.walk);

  const animation = useCallback(() => {
    setAnimationStap(prevState =>
      prevState + 1 < WALK_STEPS ? prevState + 1 : 0
    );
  }, []);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      animation();
    }, 260);

    return () => {
      clearInterval(animationInterval);
    };
  }, [animation]);

  return (
    <Container
      facing={directions[direction]}
      walk={animationStap}
      position={position}
    >
      <Facing />
    </Container>
  );
}

export default memo(Character);
