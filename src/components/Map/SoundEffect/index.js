import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import Sounds from '~/components/Sounds';

import { Container } from './styles';

function SoundEffect({ y, x, soundEffect }) {
  const playerPosition = useSelector(state => state.walk.position);
  return (
    <Container>
      {playerPosition.x === x && playerPosition.y === y && (
        <Sounds soundtrack={soundEffect} />
      )}
    </Container>
  );
}
SoundEffect.propTypes = {
  y: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  soundEffect: PropTypes.shape({
    song: PropTypes.string.isRequired,
    volume: PropTypes.number.isRequired,
    loop: PropTypes.bool,
  }).isRequired,
};
export default memo(SoundEffect);
