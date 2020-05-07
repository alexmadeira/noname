import React, { useRef, useEffect, memo } from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

function Song({ audio }) {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.play();
  }, []);

  return (
    <Container
      controls={false}
      autoPlay
      loop
      ref={audioRef}
      preload="none"
      src={audio}
      type="audio/mpeg"
    />
  );
}

Song.propTypes = {
  audio: PropTypes.string.isRequired,
};
export default memo(Song);
