import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewBook, fetchBooksFromApi } from '../redux/books/booksSlice';
import styles from '../styles/NewBook.module.css';

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
    <>
      <div className={styles.formTitle}>ADD NEW BOOK</div>
      <form
        className={styles.formContainer}
        onSubmit={async (e) => {
          e.preventDefault();
          await dispatch(createNewBook({ title, author }));
          await dispatch(fetchBooksFromApi());
          const bookTitle = document.getElementById('book-title');
          const bookAuthor = document.getElementById('book-author');
          bookTitle.value = '';
          bookAuthor.value = '';
        }}
      >
        <input
          id="book-title"
          type="text"
          placeholder="Book title"
          className={styles.input}
          value={title}
          onChange={(e) => handleTitle(e)}
        />

        <input
          id="book-author"
          type="text"
          placeholder="Author name"
          className={styles.input}
          value={author}
          onChange={(e) => handleAuthor(e)}
        />
        <button className={styles.primaryBtnBig} type="submit">ADD BOOK</button>
      </form>

    </>
  );
}

export default Newbookform;
