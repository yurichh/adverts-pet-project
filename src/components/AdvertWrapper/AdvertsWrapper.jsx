import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useRef } from 'react';

import { fetchAdverts } from '../../redux/adverts/operations';
import {
  selectAdverts,
  selectIsLoading,
  selectLastPage,
} from '../../redux/adverts/selectors';
import AdvertItem from '../AdvertItem/AdvertItem';
import styles from './styles.module.css';

const AdvertsWrapper = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const advertsContainerRef = useRef(null);
  const previousScrollPosition = useRef(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts(currentPage));
  }, [currentPage, dispatch]);

  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);
  const isLastPage = useSelector(selectLastPage);

  const handleLoadMoreClick = () => {
    setCurrentPage(prev => prev + 1);
    previousScrollPosition.current = window.scrollY;
  };

  useEffect(() => {
    window.scrollTo(0, previousScrollPosition.current);
  }, [adverts]);

  return (
    <section className={styles.section}>
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <>
          <ul className={styles.list} ref={advertsContainerRef}>
            {adverts.map(advert => (
              <li className={styles.cardWrapper} key={advert._id}>
                <AdvertItem advertData={advert} />
              </li>
            ))}
          </ul>
          {!isLastPage && (
            <button
              type="button"
              onClick={handleLoadMoreClick}
              className={styles.loadBtn}
            >
              Load more
            </button>
          )}
        </>
      )}
    </section>
  );
};

export default AdvertsWrapper;
