import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './app/pages/HomePage';

const App = () => {
  const router = createBrowserRouter([
    { path: '', element: <HomePage /> }
  ]);

  return <RouterProvider router={router} />
}

export default App