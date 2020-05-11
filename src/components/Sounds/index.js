import React, { memo } from 'react';
import ReactAudioPlayer from 'react-audio-player';

import PropTypes from 'prop-types';

function Song({ soundtrack }) {
  return (
    <>
      {soundtrack.map(({ name, song, volume, loop }) => (
        <ReactAudioPlayer
          key={name}
          src={song}
          autoPlay
          volume={volume}
          loop={loop}
        />
      ))}
    </>
  );
}
Song.propTypes = {
  soundtrack: PropTypes.arrayOf(
    PropTypes.shape({
      song: PropTypes.string.isRequired,
      volume: PropTypes.number.isRequired,
      loop: PropTypes.bool,
    })
  ).isRequired,
};
export default memo(Song);
