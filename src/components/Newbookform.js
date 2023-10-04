import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../redux/books/booksSlice';

function Newbookform() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <section>
      <h2>ADD NEW BOOK</h2>
      <form
        className="form-container"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(add({ title, author }));
        }}
      >
        <input
          type="text"
          placeholder="Book title"
          className="input-text"
          value={title}
          onChange={(e) => handleTitle(e)}
        />

        <input
          type="text"
          placeholder="Author name"
          className="input-text"
          value={author}
          onChange={(e) => handleAuthor(e)}
        />
        <button type="submit">ADD BOOK</button>
      </form>
    </section>
  );
}

export default Newbookform;
