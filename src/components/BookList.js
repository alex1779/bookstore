import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import { fetchBooksFromApi } from '../redux/books/booksSlice';

function BookList() {
  const dispatch = useDispatch();
  const { bookList } = useSelector((store) => store.books);

  useEffect(() => {
    dispatch(fetchBooksFromApi());
  }, []);

  return (
    <ul>
      {bookList.map((item) => (
        <li key={item.item_id}>
          <Book
            bookData={item}
          />
        </li>
      ))}
    </ul>
  );
}

export default BookList;
