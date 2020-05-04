import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { Container, Row } from './styles';
import Tile from './Tile';

function Map() {
  const { tiles, base, sprites } = useSelector(state => state.map);
  const development = process.env.NODE_ENV === 'development';

  return (
    <Container base={base} className={development && 'dev'}>
      {tiles.map(row => (
        <Row key={Math.random().toString()}>
          {row.map(({ tile, up, sprite }) => (
            <Tile
              key={Math.random().toString()}
              sprite={sprites[sprite.id]}
              position={sprite.position}
              tile={tile}
              up={up}
              animate={sprite.animate}
            />
          ))}
        </Row>
      ))}
    </Container>
  );
}
export default memo(Map);
