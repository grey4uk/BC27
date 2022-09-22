// import Counter from './components/Counter';
import TodosPage from './pages/TodosPage';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 auto',
        width: '80vw',
      }}>
      {/* <Counter init={1} /> */}
      <TodosPage />
      {/* <Counter init={2} /> */}
    </div>
  );
}

export default App;
