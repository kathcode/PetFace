import React, { useState, useEffect } from 'react';
import { Category } from '../Category';
import { Spinner } from '../../sharedComponents/Spinner';

import { List, Item } from './styles';

function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://kath-server-1ihgc93wc.now.sh/categories')
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []); // [] With it will render once

  return { categories, isLoading };
}

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false);
  const { categories, isLoading } = useCategoriesData();

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {isLoading ? (
        <Spinner />
      ) : (
        categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        ))
      )}
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};
