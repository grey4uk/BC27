import {
  // useEffect,
  lazy,
  Suspense,
} from 'react';
import {
  Routes,
  Route,
  Navigate,
  // useNavigate,
} from 'react-router-dom';
// import HomePage from 'pages/HomePage/HomePage';
// import AuthPage from 'pages/AuthPage/AuthPage';
// import PokemonsPage from 'pages/PokemonsPage/PokemonsPage';
// import Layout from 'components/Layout/Layout';
// import PokemonDetailed from 'components/PokemonDetailed/PokemonDetailed';

const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage')
);
const AuthPage = lazy(() =>
  import('./pages/AuthPage/AuthPage')
);
const PokemonsPage = lazy(() =>
  import('./pages/PokemonsPage/PokemonsPage')
);
const Layout = lazy(() =>
  import('./components/Layout/Layout')
);
const PokemonDetailed = lazy(() =>
  import('./components/PokemonDetailed/PokemonDetailed')
);

const App = () => {
  // const navigate = useNavigate();

  // console.log('navigate', navigate);

  // useEffect(() => {
  //   navigate('/pokemons', { state: { myValue: 'aaa' } });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='auth' element={<AuthPage />}>
            <Route path=':id' element={<h1>Hello</h1>} />
          </Route>
          <Route
            path='pokemons'
            element={<PokemonsPage />}
          />
          <Route
            path='detailed'
            // path='detailed/:name'
            element={<PokemonDetailed />}>
            <Route path='surname' element={<h2>Name</h2>} />
            <Route
              path='another'
              element={<h2>Another</h2>}
            />
          </Route>
        </Route>

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Suspense>
  );
};

export default App;
