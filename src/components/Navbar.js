import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <a href="/">Bookstore CMS</a>

      <ul>
        <li>
          <NavLink to="/">
            Books
          </NavLink>
        </li>

        <li>
          <NavLink to="/categories">
            Categories
          </NavLink>
        </li>

      </ul>
      <button type="button">
        <span>person</span>
      </button>
    </nav>
  );
}

export default Navbar;
