import Newbookform from './Newbookform';
import BookList from './BookList';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <div>
        <BookList />
        <div className={styles.divider} />
        <Newbookform />
      </div>
    </div>
  );
}

export default Home;
