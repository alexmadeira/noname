import React, { memo, useState, useEffect, useCallback } from 'react';

import PropTypes from 'prop-types';

import { TILE_STEPS } from '~/config/Constants';

import { Container } from './styles';

function Tile({ sprite, position, tile, up, animate }) {
  const [animationStap, setAnimationStap] = useState(0);

  const animation = useCallback(() => {
    setInterval(() => {
      setAnimationStap(prevState =>
        prevState + 1 < TILE_STEPS ? prevState + 1 : 0
      );
    }, 150);
  }, []);

  useEffect(() => {
    if (animate) {
      animation();
    }
  }, [animate, animation]);

  return (
    <Container
      className={`${tile} ${up && 'up'} `}
      sprite={sprite}
      position={position}
      step={animationStap}
    />
  );
}

Tile.propTypes = {
  sprite: PropTypes.string.isRequired,
  position: PropTypes.oneOfType([
    PropTypes.bool.isRequired,
    PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    }),
  ]).isRequired,
  tile: PropTypes.string.isRequired,
  up: PropTypes.bool.isRequired,
  animate: PropTypes.bool.isRequired,
};
export default memo(Tile);
