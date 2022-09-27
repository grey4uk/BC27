import React from 'react';
import PropTypes from 'prop-types';

import Paragraph from '../Paragraph/Paragraph';

const List = ({ arr }) => {
  console.log('arr', arr);
  return (
    <>
      {arr.map(({ id, title }) => {
        return (
          <Paragraph key={id} id={id} title={title} />
          //   <div id={id}>
          //   <p key={id}>{title}</p>
          //   </div>
        );
      })}
    </>
    //     <React.Fragment>
    //       <h3></h3>
    //       <p></p>
    //     </React.Fragment>
  );
};

export default List;

List.propTypes = {
  //   arr: PropTypes.arrayOf(
  //     PropTypes.exact({
  //       id: PropTypes.string.isRequired,
  //       title: PropTypes.string.isRequired,
  //     }).isRequired
  //   ).isRequired,
  arr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
