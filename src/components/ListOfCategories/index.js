import React, { useState, useEffect } from 'react';
import { Category } from '../Category';

import { List, Item } from './styles';

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    fetch('https://kath-server-1ihgc93wc.now.sh/categories')
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
      });
  }, []); // [] With it will render once

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener('scroll', onScroll);
  });

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};
