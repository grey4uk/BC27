import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getIsLogIn } from 'redux/auth/authSelectors';

const PublicRoute = ({
  children,
  restricted = false,
  redirect = '/',
}) => {
  const isLogin = useSelector(getIsLogIn);

  const isNavigate = isLogin && restricted;

  return isNavigate ? <Navigate to={redirect} /> : children;
};

export default PublicRoute;
