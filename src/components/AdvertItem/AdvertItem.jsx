import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import {
  addToFavorite,
  removeFromFavorite,
} from '../../redux/adverts/operations';
import { selectFavorites } from '../../redux/adverts/selectors';
import sprite from '../../icons/icons.svg';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import ModalCard from 'components/ModalCard/ModalCard';

const AdvertItem = ({ advertData }) => {
  const {
    gallery,
    price,
    name,
    rating,
    location,
    description,
    details,
    adults,
    transmission,
    engine,
    _id,
    reviews,
  } = advertData;

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some(item => item._id === _id);

  const dispatch = useDispatch();
  const toggleFav = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(_id));
      return;
    }
    dispatch(addToFavorite(advertData));
  };

  return (
    <div className={styles.wrapper}>
      <img src={gallery[0]} alt={name} className={styles.image} />
      <div>
        <div className={styles.topLine}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.price}>&euro;{price}.00</p>
          <button
            className={
              !isFavorite
                ? styles.favBtn
                : `${styles.favBtn} ${styles.favorite}`
            }
            type="button"
            onClick={toggleFav}
          >
            <svg width={24} height={24}>
              <use xlinkHref={`${sprite}#icon-heart`} />
            </svg>
          </button>
        </div>
        <div className={styles.secondLine}>
          <p className={styles.ratingBtn}>
            <svg width={16} height={16} className={styles.ratingIcon}>
              <use xlinkHref={`${sprite}#icon-star`} />
            </svg>
            <p
              className={styles.ratingText}
            >{`${rating} (${reviews.length} reviews)`}</p>
          </p>
          <p className={styles.location}>
            <svg width={16} height={16} className={styles.locationIcon}>
              <use xlinkHref={`${sprite}#icon-map-pin`} />
            </svg>
            <p className={styles.locationText}>{location}</p>
          </p>
        </div>
        <p className={styles.description}>{description}</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <svg width={20} height={20} className={styles.listIcon}>
              <use xlinkHref={`${sprite}#icon-adults`} />
            </svg>
            <p className={styles.listItemText}>{adults} adults</p>
          </li>
          <li className={styles.listItem}>
            <svg width={20} height={20} className={styles.listIcon2}>
              <use xlinkHref={`${sprite}#icon-transmission`} />
            </svg>
            <p className={styles.listItemText}>{transmission}</p>
          </li>
          <li className={styles.listItem}>
            <svg width={20} height={20} className={styles.listIcon}>
              <use xlinkHref={`${sprite}#icon-engine`} />
            </svg>
            <p className={styles.listItemText}>{engine}</p>
          </li>
          {details.kitchen === 1 && (
            <li className={styles.listItem}>
              <svg width={20} height={20} className={styles.listIcon2}>
                <use xlinkHref={`${sprite}#icon-kitchen`} />
              </svg>
              <p className={styles.listItemText}>Kitchen</p>
            </li>
          )}

          <li className={styles.listItem}>
            <svg width={20} height={20} className={styles.listIcon2}>
              <use xlinkHref={`${sprite}#icon-bed`} />
            </svg>
            <p className={styles.listItemText}>{details.beds} beds</p>
          </li>
          {details.airConditioner === 1 && (
            <li className={styles.listItem}>
              <svg width={20} height={20} className={styles.listIcon}>
                <use xlinkHref={`${sprite}#icon-AC`} />
              </svg>
              <p className={styles.listItemText}>AC</p>
            </li>
          )}
        </ul>
        <button type="button" className={styles.showMore} onClick={toggleModal}>
          Show more
        </button>
        {showModal && (
          <Modal onClose={toggleModal}>
            <ModalCard advertData={advertData} onClose={toggleModal} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default AdvertItem;
