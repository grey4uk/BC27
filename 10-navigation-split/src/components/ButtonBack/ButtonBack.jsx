import Button from 'react-bootstrap/Button';

const ButtonBack = ({ onClick }) => {
  return (
    <Button variant='primary' onClick={onClick}>
      Go back
    </Button>
  );
};

export default ButtonBack;
