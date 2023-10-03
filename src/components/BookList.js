import { useSelector } from 'react-redux';
import Book from './Book';

function BookList() {
  const { bookList } = useSelector((store) => store.books);
  return (
    <ul>
      {bookList.map((item) => (
        <li key={item.id}>
          <Book
            bookData={item}
          />
        </li>
      ))}
    </ul>
  );
}

export default BookList;
