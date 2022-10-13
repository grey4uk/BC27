import Form from 'react-bootstrap/Form';

function FilterTodos({ onChange, value }) {
  return (
    <>
      <Form.Label htmlFor='inputPassword5'>
        Find todo
      </Form.Label>
      <Form.Control
        type='text'
        id='inputPassword5'
        aria-describedby='passwordHelpBlock'
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default FilterTodos;
