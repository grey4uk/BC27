import logo from './logo.svg';
import s from './App.module.css';
import { Title } from './components/Title/Title';
import Container from './components/Container/Container';
import List from './components/List/List';
import array from './db/array.json';

function App() {
  console.log(' s', s);
  return (
    <div className={s.wrapper}>
      <Container children={[1, 2, 3]}>
        <Title
          label='My favorite React'
          number={1}
          length={1}
          className={'my class'}
          id={123}
          children={[4, 5, 6]}
        />
        <List arr={array} />
      </Container>
    </div>
  );
}

export default App;
