import React from 'react';
import {useGetUsersByIdQuery } from './features/apiThunk/RTKUserApi.jsx';
import Todo from "./components/Todo.jsx"
import Photos from "./components/Photos.jsx"

import PhotosId from "./components/PhotosId.jsx"

const App = () => {
  const { data: users, error, isLoading } = useGetUsersByIdQuery(3);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users!</p>;

  return (
    <>
      <ul>
        <li>{users.name}</li>
      </ul>

      <p>Photos Id Component Below this message:</p>

      <PhotosId />

      {/* <Todo />
      <Photos /> */}
    </>
  );
};

export default App; 