import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLogIn } from 'redux/auth/authSelectors';

const PublicRoute = ({
  children,
  redirect = '/',
  restricted = false,
}) => {
  const isLogin = useSelector(getIsLogIn);

  const isNavigated = isLogin && restricted;

  console.log('restricted', restricted);

  return isNavigated ? (
    <Navigate to={redirect} />
  ) : (
    children
  );
};

export default PublicRoute;
