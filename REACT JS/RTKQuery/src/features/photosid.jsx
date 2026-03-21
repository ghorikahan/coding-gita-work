import React from 'react';
import {useGetPhotosByIdQuery } from '../features/apiThunk/RTKUserApi.jsx';

const PhotosId = () => {
  const { data: users, error, isLoading } = useGetPhotosByIdQuery(5);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users!</p>;

  return (
    <>
      <ul>
        <li>{users.title}</li>
      </ul>

      {/* <Todo />
      <Photos /> */}
    </>
  );
};

export default PhotosId;
