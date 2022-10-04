import {
  Link,
  // Outlet,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';

const POKEMONS = 'pokemons';

function PokemonsPage() {
  const [pokemons, setPokemons] = useState(
    () => JSON.parse(localStorage.getItem(POKEMONS)) ?? []
  );
  const location = useLocation();
  // console.log('location.pathname :>> ', location.pathname);

  useEffect(() => {
    myMethod();
  }, []);

  useEffect(() => {
    const nextPokemons = pokemons;
    if (nextPokemons) {
      localStorage.setItem(
        POKEMONS,
        JSON.stringify(nextPokemons)
      );
    }
  }, [pokemons]);

  const myMethod = () => {
    // https://pokeapi.co/api/v2/berry-firmness/1
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((res) => res.json())
      .then((res) => {
        setPokemons(res.results);
      })
      .finally(() => {
        setTimeout(() => {
          window.scrollTo({
            top: 1000,
            behavior: 'smooth',
          });
        }, 400);
      });
  };

  const pokemonsSortArrayRef = useCallback(
    () => pokemons.sort((a, b) => a - b),
    [pokemons]
  );

  return (
    <div style={{ display: 'flex' }}>
      <ul>
        {pokemonsSortArrayRef()?.map((el) => (
          <li key={el.name}>
            <Link
              to={`/detailed?name=${el.name}`}
              // to={`/detailed/${el.name}`}
              // state={{ from: location.pathname }}>
              state={location}>
              {el.name}
            </Link>
            {/* {el.name === name && <Outlet />} */}
          </li>
        ))}
      </ul>
      {/* <Outlet /> */}
    </div>
  );
}

export default PokemonsPage;
