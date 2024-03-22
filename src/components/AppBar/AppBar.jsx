import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

const AppBar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink to="/" className={styles.navLink}>
              Home
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/catalog" className={styles.navLink}>
              Catalog
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/favorites" className={styles.navLink}>
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppBar;
