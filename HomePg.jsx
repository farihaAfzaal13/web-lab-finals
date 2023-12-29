import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, selectCategories } from './categoriesSlice';
import { useHistory } from 'react-router-dom';

const HomePg = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { list, loading, error } = useSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    history.push(`/details/${category.id}`);
  };

  return (
    <div>
      <h1>Categories</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {list.map((category) => (
          <li key={category.id} onClick={() => handleCategoryClick(category)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePg;
