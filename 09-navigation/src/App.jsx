import { useEffect, lazy, Suspense } from 'react';
import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';

// import HomePage from 'pages/HomePage/HomePage';
import AuthPage from 'pages/AuthPage/AuthPage';
import PokemonsPage from 'pages/PokemonsPage/PokemonsPage';
import Layout from 'components/Layout/Layout';
import PokemonDetailed from 'components/PokemonDetailed/PokemonDetailed';
const HomePage = lazy(() =>
  import('pages/HomePage/HomePage')
);

const App = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   navigate('/pokemons');
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='auth' element={<AuthPage />}>
            <Route path=':id' element={<h1>Hello</h1>} />
          </Route>
          <Route path='pokemons' element={<PokemonsPage />}>
            <Route
              path=':name'
              element={<PokemonDetailed />}
            />
          </Route>
        </Route>

        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </Suspense>
  );
};

export default App;
