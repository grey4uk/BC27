import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { signout } from 'redux/auth/authOperations';

const MainPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      Main
      <Button
        type='submit'
        variant='contained'
        color='primary'
        style={{
          margin: '5px',
        }}
        onClick={() => dispatch(signout())}>
        SignOut
      </Button>
    </>
  );
};

export default MainPage;
