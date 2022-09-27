import { Component } from 'react';

import Modal from 'components/Modal/Modal';

const POKEMONS = 'pokemons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      onePokemon: null,
      name: '',
    };
    console.log('constructor-------------');
  }
  // state = {
  //   value: [],
  //   onePokemon: null,
  //   name: this.props.init,
  // };

  static defaultProps = {};

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps}]]]]]]]');
    return prevState;
    // return prevState.name !== nextProps.init
    //   ? { ...prevState, name: nextProps.init }
    //   : prevState;
  }

  componentDidMount() {
    console.log('componentDidMount++++++++++++++++');
    const parsedPokemons = JSON.parse(
      localStorage.getItem(POKEMONS)
    );
    parsedPokemons
      ? this.setState({ pokemons: parsedPokemons })
      : this.myMethod();
  }

  shouldComponentUpdate(nextProps, nextState) {
    // nextProps=this.props, nextState=this.state
    console.log('shouldComponentUpdate!!!!!!!!!!!!!!!');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const snapshot = this.state.pokemons.length - 2;
    return snapshot;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      'componetDidUpdate out if   ??????????????',
      snapshot
    );
    const nextPokemons = this.state.pokemons;
    const prevPokemons = prevState.pokemons;
    if (prevPokemons !== nextPokemons && snapshot === 20) {
      localStorage.setItem(
        POKEMONS,
        JSON.stringify(nextPokemons)
      );
    }
  }

  myMethod = () => {
    // https://pokeapi.co/api/v2/berry-firmness/1
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((res) => res.json())
      .then((res) => {
        console.log('res>>>>>>>>>>>>>>>>>>>>>>>', res);
        this.setState({ pokemons: res.results });
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

  closeModal = () => {
    console.log('close');
    this.setState({ name: '' });
  };

  render() {
    console.log('render>>>>');
    // console.log(this.state);
    // const { findPokemon } = this;
    const { pokemons, name } = this.state;
    return (
      <>
        {name ? (
          <Modal name={name} closeModal={this.closeModal} />
        ) : (
          <>
            <button type='button' onClick={this.myMethod}>
              Load pictures
            </button>
            <ul>
              {pokemons
                ? pokemons.map((el) => (
                    <li
                      key={el.name}
                      onClick={() =>
                        this.setState({ name: el.name })
                      }>
                      <p>{el.name}</p>
                      {/* <img
                        src={webformatURL}
                        alt='alt'
                        width='300'
                      /> */}
                    </li>
                  ))
                : null}
              {/* {this.state.value.map(({ webformatURL, id }) => (
                <li key={id}>
                  <img
                    src={webformatURL}
                    alt='alt'
                    width='300'
                  />
                </li>
              ))} */}
            </ul>
          </>
        )}
      </>
    );
  }
}

export default App;
