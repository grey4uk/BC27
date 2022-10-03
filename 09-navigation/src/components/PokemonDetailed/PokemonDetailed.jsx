import { useState, useEffect, useCallback } from 'react';

import { useParams } from 'react-router-dom';

const PokemonDetailed = () => {
  const { name } = useParams();
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

  return onePokemon ? (
    <img src={onePokemon} alt='alt' width='300' />
  ) : (
    <h3>LOADING...</h3>
  );
};

export default PokemonDetailed;
