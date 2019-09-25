import React, { useState, useEffect, useRef } from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import {
  ImgWrapper, Img, Button, Article,
} from './styles';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ likeId, likes = 0, src = DEFAULT_IMAGE }) => {
  const refElement = useRef(null);
  const [show, setShow] = useState(false);

  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage.getItem(likeId);

      return like;
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];

      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });

    observer.observe(refElement.current);
  }, [refElement]);

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(likeId, value);
      setLiked(value);
    } catch (error) {
      console.log(error);
    }
  };

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Article ref={refElement}>
      {show && (
        <>
          <a href={`/detail/${likeId}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button onClick={() => setLocalStorage(!liked)}>
            <Icon size="32px" />
            {`${likes} likes!` }
          </Button>
        </>
      )}
    </Article>
  );
};
