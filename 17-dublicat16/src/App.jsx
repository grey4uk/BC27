import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';

import AuthPage from 'pages/AuthPage/AuthPage';
import HomePage from 'pages/HomePage/HomePage';
import MainPage from 'pages/MainPage/MainPage';

import Layout from 'components/Layout/Layout';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import PrivatRoute from 'components/PrivatRoute/PrivateRoute';
import { getCurrentUser } from 'redux/auth/authOperations';

const App = () => {
  const dispatch = useDispatch();
  const ref = useRef();

  useEffect(() => {
    dispatch(getCurrentUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route
          index
          element={
            <PublicRoute>
              <HomePage />
            </PublicRoute>
          }
        />
        <Route
          path='auth'
          element={
            <PublicRoute restricted redirect='/main'>
              <AuthPage />
            </PublicRoute>
          }
        />
        <Route
          path='main'
          element={
            <PrivatRoute redirect='/auth'>
              <MainPage />
            </PrivatRoute>
          }
        />
      </Route>
      <Route path='*' element={<Navigate to='/auth' />} />
    </Routes>
  );
};

export default App;
