import React, { useEffect, useState } from 'react';

import AdvertItem from '../AdvertItem/AdvertItem';
import styles from './styles.module.css';
import { fetchAdverts } from 'components/services/advertsServices';
import { useSelector } from 'react-redux';
import {
  selectEquipment,
  selectLocation,
  selectType,
} from '../../redux/filter/selectors';

const AdvertsWrapper = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [adverts, setAdverts] = useState([]);
  const [visibleAdverts, setVisibleAdverts] = useState(4);

  const form = useSelector(selectType);
  const location = useSelector(selectLocation);
  const equipment = useSelector(selectEquipment);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const data = await fetchAdverts();
      setAdverts(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    setVisibleAdverts(4);
  }, [form, location, equipment]);

  const filteredAdverts = adverts.filter(advert => {
    // Перевіряємо тип
    if (form !== '' && advert.form !== form) return false;

    // Перевіряємо обладнання
    if (equipment.length > 0) {
      for (const item of equipment) {
        if (!advert.details[item]) return false;
      }
    }
    // Перевіряємо місце розташування
    return !(
      location !== '' &&
      !advert.location.toLowerCase().includes(location.toLowerCase())
    );
  });

  const visibleAdvertsList = filteredAdverts.slice(0, visibleAdverts);

  const handleLoadMore = () => {
    setVisibleAdverts(prev => prev + 4);
  };

  return (
    <section className={styles.section}>
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <>
          <ul className={styles.list}>
            {visibleAdvertsList.map(advert => (
              <li className={styles.cardWrapper} key={advert._id}>
                <AdvertItem advertData={advert} />
              </li>
            ))}
          </ul>
          {visibleAdvertsList.length < filteredAdverts.length && (
            <button onClick={handleLoadMore} className={styles.loadBtn}>
              Load More
            </button>
          )}
        </>
      )}
    </section>
  );
};

export default AdvertsWrapper;
