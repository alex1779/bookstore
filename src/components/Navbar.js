import { NavLink } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.navbrand}>Bookstore CMS</a>

      <ul className={styles.navlinks}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => {
              const active = isActive ? styles.active : styles.navlink;
              return active;
            }}
          >
            BOOKS
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/categories"
            className={({ isActive }) => {
              const active = isActive ? styles.active : styles.navlink;
              return active;
            }}
          >
            CATEGORIES
          </NavLink>
        </li>

      </ul>
      <button type="button" className={styles.iconButton}>
        <BsFillPersonFill
          color="#0290ff"
          size={22}
        />
      </button>
    </nav>
  );
}

export default Navbar;
