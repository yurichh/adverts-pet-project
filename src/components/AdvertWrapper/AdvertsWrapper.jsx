import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { fetchAdverts } from '../../redux/adverts/operations';
import { selectAdverts, selectIsLoading } from '../../redux/adverts/selectors';
import AdvertItem from '../AdvertItem/AdvertItem';
import styles from './styles.module.css';

const AdvertsWrapper = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts(currentPage));
  }, [currentPage, dispatch]);

  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <section className={styles.section}>
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        adverts.length !== 0 && (
          <ul className={styles.list}>
            {adverts.map(advert => (
              <li key={advert._id} className={styles.cardWrapper}>
                <AdvertItem advertData={advert} />
              </li>
            ))}
          </ul>
        )
      )}
      <button type="button" onClick={() => setCurrentPage(prev => prev + 1)}>
        Load more
      </button>
    </section>
  );
};

export default AdvertsWrapper;
