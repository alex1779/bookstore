import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/books/booksSlice';

function Book({ bookData }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h4>{bookData.category}</h4>
      <h2>{bookData.title}</h2>
      <h6>{bookData.author}</h6>
      <button type="button" onClick={() => dispatch(remove({ bookData }))}>Remove</button>
    </div>
  );
}

Book.propTypes = {
  bookData: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
