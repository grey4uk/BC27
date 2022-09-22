import React from 'react';

import { count } from './service';

class Counter extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     console.log('props :>> ', props);
  //     this.state = { counter: props.init };
  //   }

  state = { counter: this.props.init, a: 'aaaa' };

  add = (event) => {
    //     console.log('event', event);
    // this.setState({ counter: this.state.counter + 1 });
    //     this.setState({ a: 'bbbb' });

    //     this.setState((prev) => {
    //       console.log('prevState :>> ', this.state.a);
    //       return {
    //         counter: prev.counter + 1,
    //       };
    //     });

    //     this.setState(updater,callback);
    //     updater={key:value}
    //callback=(prevState=this.state)=>{return updater}

    //     this.state.counter=this.state.counter+1;//wrong

    for (let i = 0; i < 3; i++) {
      //       this.setState({ counter: this.state.counter + i });
      this.setState((state) => {
        console.log('state.counter inside', state.counter);
        return {
          counter: state.counter + i,
        };
      });
      //       state - попередній стейт
      console.log(
        'this.state.counter outside :>> ',
        this.state.counter
      );
    }
  };

  render() {
    const { add } = this;
    const { counter } = this.state;
    //     console.log('props', this.props);
    return (
      <>
        {counter}
        <button
          style={{ padding: '20px', margin: '10px' }}
          type='button'
          onClick={add}>
          ADD
        </button>
      </>
    );
  }
}

export default Counter;
