import {
  useState,
  useEffect,
  useCallback,
  lazy,
} from 'react';

import {
  // useParams,
  useLocation,
  useNavigate,
  Link,
  useSearchParams,
} from 'react-router-dom';
import { Outlet } from 'react-router-dom/dist';
// import ButtonBack from 'components/ButtonBack/ButtonBack';
const ButtonBack = lazy(() =>
  import('../ButtonBack/ButtonBack')
);

const PokemonDetailed = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log('location :>> ', location);
  // const params = useParams();
  // console.log('params :>> ', params);
  // const [searchParams, setSearchParams] = useSearchParams();
  const [searchParams] = useSearchParams();

  const name = searchParams.get('name');
  const [onePokemon, setOnePokemon] = useState(null);

  const findPokemon = useCallback(() => {
    if (!name) return;
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((res) => {
        setOnePokemon(res.sprites.front_default);
      });
  }, [name]);

  useEffect(() => {
    findPokemon();
    // document.addEventListener(
    //   'keydown',
    //   closeModal
    // );

    //     return () =>
    //       document.removeEventListener(
    //         'keydown',
    //        closeModal
    //       );
  }, [findPokemon]);

  return (
    <div>
      {/* <ButtonBack
        // onClick={() => navigate(-1)}
        // onClick={() => navigate(location.state)}
        onClick={() => navigate(location.state)}
      /> */}
      <Link to={location.state.pathname}>Go back</Link>
      {onePokemon ? (
        <img src={onePokemon} alt='alt' width='300' />
      ) : (
        <h3>LOADING...</h3>
      )}
      <Link to='surname' state={location.state}>
        {/* state={{ from: location.state?.from }}> */}
        Name of Pokemon
      </Link>
      <Link to='another' state={location.state}>
        {/* state={{ from: location.state?.from }}> */}
        another
      </Link>

      <Outlet />
    </div>
  );
};

export default PokemonDetailed;
