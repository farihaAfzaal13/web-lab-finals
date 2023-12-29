
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetails, selectDetails } from './detailsSlice';
import { useHistory, useParams } from 'react-router-dom';

const Details = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const { data, loading, error } = useSelector(selectDetails);

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, [dispatch, id]);

  const handleBackButtonClick = () => {
    history.push('/');
  };

  return (
    <div>
      <h1>Details</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <p>Name: {data.name}</p>
          <p>Views: {data.views}</p>
        </div>
      )}
      <button onClick={handleBackButtonClick}>&lt; Back</button>
    </div>
  );
};

export default Details;
