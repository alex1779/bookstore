import PropTypes from 'prop-types';

function Book({ category, title, author }) {
  return (
    <div>
      <h4>{category}</h4>
      <h2>{title}</h2>
      <h6>{author}</h6>
      <button type="button">Remove</button>
    </div>
  );
}

Book.defaultProps = {
  category: 0,
  title: 0,
  author: 0,
};

Book.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

export default Book;
