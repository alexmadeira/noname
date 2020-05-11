import React, { memo, useState, useEffect, useCallback } from 'react';

import PropTypes from 'prop-types';

import { TILE_STEPS } from '~/config/Constants';

import { Container } from './styles';

function Layer({ sprite, position, up, animate }) {
  const [animationStap, setAnimationStap] = useState(0);

  const animation = useCallback(() => {
    setAnimationStap(prevState =>
      prevState + 1 < TILE_STEPS ? prevState + 1 : 0
    );
  }, []);

  useEffect(() => {
    if (animate) {
      const animationInterval = setInterval(() => {
        animation();
      }, 150);

      return () => {
        clearInterval(animationInterval);
      };
    }
    return () => {};
  }, [animate, animation]);

  return (
    <Container
      className={up && 'up'}
      sprite={sprite}
      position={position}
      step={animationStap}
    />
  );
}

Layer.defaultProps = {
  animate: false,
};

Layer.propTypes = {
  sprite: PropTypes.string.isRequired,
  position: PropTypes.oneOfType([
    PropTypes.bool.isRequired,
    PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    }),
  ]).isRequired,
  up: PropTypes.bool.isRequired,
  animate: PropTypes.bool,
};

export default memo(Layer);
