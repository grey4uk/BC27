// import { Component } from 'react';

// class Title extends Component {
//   render() {
//     return <h2>MY TITLE</h2>;
//   }
// }
// export default Title;

const MyTitle = (props) => <div>{props.title}</div>;

const func = () => console.log('uweigegf');

export const Title = (props) => {
  const {
    label = 'Default Title',
    number,
    length,
    id,
    children,
  } = props;
  //   console.log('props', label);
  console.log('props :>> ', props);
  console.log('type of id', typeof id);
  return <h2>{label}</h2>;
};
// export default Title;
