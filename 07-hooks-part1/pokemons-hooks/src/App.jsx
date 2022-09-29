import {
  //  Component,
  useState,
  useEffect,
} from 'react';

import Modal from 'components/Modal/Modal';

const POKEMONS = 'pokemons';

function App() {
  // state={
  //   pokemons: [],
  //   onePokemon: null,
  //   name: '',
  // }
  const [pokemons, setPokemons] = useState(() =>
    JSON.parse(localStorage.getItem(POKEMONS))
  );
  // const [onePokemon, setOnePokemon] = useState(null);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('first>>>');
    myMethod();
    return () => {};
  }, []);

  useEffect(() => {
    console.log('componentDidUpdate');

    const nextPokemons = pokemons;
    if (nextPokemons) {
      localStorage.setItem(
        POKEMONS,
        JSON.stringify(nextPokemons)
      );
      console.log('nextPokemons');
    }

    // return () => {
    //   console.log('componentWillUnmount');
    //   localStorage.setItem(POKEMONS, null);
    // };
  }, [pokemons]);

  // function closeModal () {
  //   // this.setState({ name: '' });
  //   setName('');
  // };

  const myMethod = () => {
    // https://pokeapi.co/api/v2/berry-firmness/1
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((res) => res.json())
      .then((res) => {
        // this.setState({ pokemons: res.results });
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

  return (
    <>
      {name ? (
        <Modal
          name={name}
          closeModal={() => setName('')}
          //  closeModal={closeModal}
        />
      ) : (
        <>
          <button type='button' onClick={myMethod}>
            Load pictures
          </button>
          <ul>
            {pokemons?.map((el) => (
              <li
                key={el.name}
                onClick={() =>
                  // this.setState({ name: el.name })
                  setName(el.name)
                }>
                <p>{el.name}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default App;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       pokemons: this.props.pokemons,
//       onePokemon: {},
//       name: '',
//     };
//   }

//   // this.setState({pokemons:[{},{}]});
//   // const [pokemons,setPokemons]=useState([]);

//   // setPokemons([{},{}])

//   // setPokemons((prev)=>[...prev,...[{},{}]])
//   // setPokemons([...pokemons,...[{},{}]])

//   componentDidMount() {
//     const parsedPokemons = JSON.parse(
//       localStorage.getItem(POKEMONS)
//     );
//     parsedPokemons
//       ? this.setState({ pokemons: parsedPokemons })
//       : this.myMethod();
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     // nextProps=this.props, nextState=this.state
//     console.log('shouldComponentUpdate!!!!!!!!!!!!!!!');
//     return true;
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     const snapshot = this.state.pokemons.length - 2;
//     return snapshot;
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log(
//       'componetDidUpdate out if   ??????????????',
//       snapshot
//     );
//     const nextPokemons = this.state.pokemons;
//     const prevPokemons = prevState.pokemons;
//     if (prevPokemons !== nextPokemons && snapshot === 20) {
//       localStorage.setItem(
//         POKEMONS,
//         JSON.stringify(nextPokemons)
//       );
//     }
//   }

//   myMethod = () => {
//     // https://pokeapi.co/api/v2/berry-firmness/1
//     fetch('https://pokeapi.co/api/v2/pokemon/')
//       .then((res) => res.json())
//       .then((res) => {
//         console.log('res>>>>>>>>>>>>>>>>>>>>>>>', res);
//         this.setState({ pokemons: res.results });
//       })
//       .finally(() => {
//         setTimeout(() => {
//           window.scrollTo({
//             top: 1000,
//             behavior: 'smooth',
//           });
//         }, 400);
//       });
//   };

//   closeModal = () => {
//     console.log('close');
//     this.setState({ name: '' });
//   };

//   render() {
//     console.log('render>>>>');
//     // console.log(this.state);
//     // const { findPokemon } = this;
//     const { pokemons, name } = this.state;
//     return (
//       <>
//         {name ? (
//           <Modal name={name} closeModal={this.closeModal} />
//         ) : (
//           <>
//             <button type='button' onClick={this.myMethod}>
//               Load pictures
//             </button>
//             <ul>
//               {pokemons
//                 ? pokemons.map((el) => (
//                     <li
//                       key={el.name}
//                       onClick={() =>
//                         this.setState({ name: el.name })
//                       }>
//                       <p>{el.name}</p>
//                       {/* <img
//                         src={webformatURL}
//                         alt='alt'
//                         width='300'
//                       /> */}
//                     </li>
//                   ))
//                 : null}
//               {/* {this.state.value.map(({ webformatURL, id }) => (
//                 <li key={id}>
//                   <img
//                     src={webformatURL}
//                     alt='alt'
//                     width='300'
//                   />
//                 </li>
//               ))} */}
//             </ul>
//           </>
//         )}
//       </>
//     );
//   }
// }

// export default App;
