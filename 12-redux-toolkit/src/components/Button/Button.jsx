import Button from 'react-bootstrap/Button';

const MyButton = ({ onClick, title }) => {
  return (
    <Button variant='primary' onClick={onClick}>
      {title}
    </Button>
  );
};

export default MyButton;
