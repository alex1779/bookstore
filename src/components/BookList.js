import Book from './Book';

const books = [
  {
    id: 1,
    category: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: 2,
    category: 'Action',
    title: 'Dune',
    author: 'Frank Herbert',
  },
];

function BookList() {
  return (
    <ul>
      {books.map((item) => (
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
