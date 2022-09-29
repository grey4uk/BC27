import { Component } from 'react';

class Modal extends Component {
  state = { name: this.props.name, onePokemon: null };

  findPokemon = () => {
    const { name } = this.state;
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          onePokemon: res.sprites.front_default,
        });
      });
  };

  componentDidMount() {
    this.findPokemon();
    document.addEventListener(
      'keydown',
      this.props.closeModal
    );
  }

  componentWillUnmount() {
    document.removeEventListener(
      'keydown',
      this.props.closeModal
    );
  }

  render() {
    const { onePokemon } = this.state;
    return <img src={onePokemon} alt='alt' width='300' />;
  }
}

export default Modal;
