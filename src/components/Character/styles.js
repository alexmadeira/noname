import styled from 'styled-components';

import charactersSprite from '~/assets/characters/hero/player.png';
import { SPRITE_SIZE, WALK_SPACES } from '~/config/Constants';

export const Container = styled.div`
  background: url(${charactersSprite});
  height: ${SPRITE_SIZE}px;
  width: ${SPRITE_SIZE}px;
  background-position-y: -${props => props.facing * SPRITE_SIZE}px;
  background-position-x: -${props => props.walk * SPRITE_SIZE}px;
  position: absolute;
  top: ${props => props.position.y * WALK_SPACES}px;
  left: ${props => props.position.x * WALK_SPACES}px;
  transition: top 250ms ease;
  transition: left 250ms ease;
`;
