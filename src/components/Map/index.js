import React, { memo } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { useSelector } from 'react-redux';

import Event from './Event';
import Layer from './Layer';
import { Container, Row, Tile } from './styles';

function Map() {
  const { tiles, base, sprites, name, bgm } = useSelector(
    state => state.map.data
  );
  const development = process.env.NODE_ENV === 'development';

  return (
    <Container base={base} className={development && 'dev'}>
      <ReactAudioPlayer src={bgm} autoPlay volume={0.2} />
      <h1>{name}</h1>

      {tiles.map((row, y) => (
        <Row key={Math.random().toString()}>
          {row.map(({ tile, layers, event }, x) => (
            <Tile className={tile} key={Math.random().toString()}>
              {event && <Event y={y} x={x} event={event} />}
              {layers.map(({ id, position, up, animate }) => (
                <Layer
                  key={Math.random().toString()}
                  sprite={sprites[id]}
                  position={position}
                  up={up}
                  animate={animate}
                />
              ))}
            </Tile>
          ))}
        </Row>
      ))}
    </Container>
  );
}
export default memo(Map);
