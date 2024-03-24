import { useEffect, useState } from 'react';

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

  const form = useSelector(selectType);
  const location = useSelector(selectLocation);
  const equipment = useSelector(selectEquipment);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchAdverts();
      setAdverts(data);
    }
    setIsLoading(true);
    fetchData();
    setIsLoading(false);
  }, []);

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

  return (
    <section className={styles.section}>
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <>
          {filteredAdverts.length === 0 ? (
            <div className={styles.noAdverts}>Oooops... No adverts here</div>
          ) : (
            <ul className={styles.list}>
              {filteredAdverts.map(advert => (
                <li className={styles.cardWrapper} key={advert._id}>
                  <AdvertItem advertData={advert} />
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </section>
  );
};

export default AdvertsWrapper;
