import PropTypes from 'prop-types';

const Paragraph = ({ title, id }) => <p>{title}</p>;

export default Paragraph;

Paragraph.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
