// import { useState } from 'react';

import {
  Routes,
  Route,
  Navigate,
  Outlet,
  useNavigate,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';

import AuthPage from 'pages/AuthPage/AuthPage';
import MainPage from 'pages/MainPage/MainPage';
import { getIsLogIn } from 'redux/auth/authSelectors';
import { useEffect } from 'react';
import { auth } from 'services/firebase';
import { setCurrentUser } from 'redux/auth/authSlice';

// import Layout from 'components/Layout/Layout';

const App = () => {
  // const [auth, setAuth] = useState(false);
  // return <>{auth ? <MainPage /> : <AuthPage />}</>;
  const isLogin = useSelector(getIsLogIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(
      auth,
      (user) => user && dispatch(setCurrentUser(user))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    isLogin ? navigate('/main') : navigate('/auth');
  }, [isLogin, navigate]);

  return (
    <Routes>
      <Route path='/' element={<Outlet />}>
        <Route path='auth' element={<AuthPage />} />
        <Route path='main' element={<MainPage />} />
      </Route>
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default App;
