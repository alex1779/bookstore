import { useSelector } from 'react-redux';
import Book from './Book';

function BookList() {
  const { bookList } = useSelector((store) => store.books);
  return (
    <ul>
      {bookList.map((item) => (
        <li key={item.id}>
          <Book
            category={item.category}
            title={item.title}
            author={item.author}
          />
        </li>
      ))}
    </ul>
  );
}

export default BookList;
