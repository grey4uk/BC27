import {
  NavLink,
  Outlet,
  useParams,
} from 'react-router-dom';

const getActiveStyle = (prop) => {
  const { isActive } = prop;
  //   console.log('prop :>> ', prop);
  return isActive ? { color: 'red' } : { color: 'blue' };
};

const Layout = () => {
  const params = useParams();
  console.log('params', params);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
      }}>
      <nav>
        {/* <NavLink
          style={(props) => ({
            ...getActiveStyle(props),
            ...{ padding: '10px' },
          })}
          to='/home'>
                  Home
        </NavLink> */}
        <NavLink
          style={(props) => ({
            ...getActiveStyle(props),
            ...{ padding: '10px' },
          })}
          to='/auth'>
          Auth
        </NavLink>
        <NavLink
          style={(props) => ({
            ...getActiveStyle(props),
            ...{ padding: '10px' },
          })}
          to='/pokemons'>
          Pokemons
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
