import { useSelector } from 'react-redux';

import styles from './styles.module.css';

import { selectFavorites } from '../../redux/adverts/selectors';
import AdvertItem from 'components/AdvertItem/AdvertItem';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <section className={styles.section}>
      {favorites.length === 0 ? (
        <div className={styles.nothing}>Oooops... No favorites here </div>
      ) : (
        <div className={styles.listWrapper}>
          <p className={styles.total}>Total in favorites: {favorites.length}</p>
          <ul className={styles.list}>
            {favorites.map(item => (
              <li className={styles.item} key={item._id}>
                <AdvertItem advertData={item} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Favorites;
