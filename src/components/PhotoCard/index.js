import React from 'react';
import {
  ImgWrapper, Img, Article,
} from './styles';

// Own Hooks
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';

import { FavButton } from '../FavButton';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ likeId, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${likeId}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const [show, refElement] = useNearScreen();

  const handleFavClick = () => setLiked(!liked);

  return (
    <Article ref={refElement}>
      {show && (
        <>
          <a href={`/?detail=${likeId}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  );
};
