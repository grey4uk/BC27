import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLogIn } from 'redux/auth/authSelectors';

const PrivateRoute = ({ children, redirect = '/' }) => {
  const isLogin = useSelector(getIsLogIn);
  return isLogin ? children : <Navigate to={redirect} />;
};

export default PrivateRoute;
