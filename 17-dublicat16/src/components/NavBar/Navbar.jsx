import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLogIn } from 'redux/auth/authSelectors';

const Navbar = () => {
  const isLogin = useSelector(getIsLogIn);
  return (
    <nav style={{ display: 'flex', gap: '20px' }}>
      <NavLink to='/' end>
        Home
      </NavLink>
      {isLogin ? (
        <NavLink to='/main' end>
          Main
        </NavLink>
      ) : (
        <NavLink to='/auth' end>
          Auth
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
