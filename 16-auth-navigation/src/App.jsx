import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useRef } from 'react';

import AuthPage from 'pages/AuthPage/AuthPage';
import HomePage from 'pages/HomePage/HomePage';
import MainPage from 'pages/MainPage/MainPage';

// import { auth } from 'services/firebase';
// import { setCurrentUser } from 'redux/auth/authSlice';

import Layout from 'components/Layout/Layout';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import PrivatRoute from 'components/PrivatRoute/PrivateRoute';
import { getCurrentUser } from 'redux/auth/authOperations';

const App = () => {
  const dispatch = useDispatch();
  const ref = useRef();
  console.log('ref', ref);

  useEffect(() => {
    dispatch(getCurrentUser());
    // onAuthStateChanged(
    //   auth,
    //   (user) => user && dispatch(setCurrentUser(user))
    // );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  return (
    <>
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
              <PublicRoute restricted redirect='/'>
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
    </>
  );
};

export default App;
