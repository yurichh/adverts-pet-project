import styles from './styles.module.css';
import sprite from '../../icons/icons.svg';
import { useState } from 'react';
import Features from 'components/Features/Features';
import Reviews from 'components/Reviews/Reviews';
import Booking from 'components/Booking/Booking';

const ModalCard = ({ advertData, onClose }) => {
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

  const [selectedOption, setSelectedOption] = useState('features');

  return (
    <div className={styles.wrapper}>
      <div className={styles.topLine}>
        <h1 className={styles.name}>{name}</h1>
        <div className={styles.closeContainer} onClick={onClose}>
          <div className={styles.leftright}></div>
          <div className={styles.rightleft}></div>
        </div>
      </div>
      <div className={styles.infoLine}>
        <button className={styles.ratingBtn} type="button">
          <svg width={16} height={16} className={styles.ratingIcon}>
            <use xlinkHref={`${sprite}#icon-star`} />
          </svg>
          <p
            className={styles.ratingText}
          >{`${rating} (${reviews.length} reviews)`}</p>
        </button>
        <p className={styles.location}>
          <svg width={16} height={16} className={styles.locationIcon}>
            <use xlinkHref={`${sprite}#icon-map-pin`} />
          </svg>
          <p className={styles.locationText}>{location}</p>
        </p>
        <p className={styles.price}>&euro;{price}.00</p>
      </div>
      <ul className={styles.imageList}>
        {gallery.length > 0 &&
          gallery.map(photo => (
            <li className={styles.imageItem} key={photo}>
              <img src={photo} alt={name} className={styles.image} />
            </li>
          ))}
      </ul>
      <p className={styles.description}>{description}</p>
      <div className={styles.optionWrapper}>
        <input
          type="radio"
          name="option"
          id="features"
          defaultChecked
          className={styles.optionRadio}
          onClick={() => setSelectedOption('features')}
        ></input>
        <label htmlFor="features" className={styles.optionLabel}>
          Features
        </label>
        <input
          type="radio"
          name="option"
          id="reviews"
          className={styles.optionRadio}
          onClick={() => setSelectedOption('reviews')}
        ></input>
        <label htmlFor="reviews" className={styles.optionLabel}>
          Reviews
        </label>
      </div>
      <hr className={styles.hr} />
      <div className={styles.featRevMenu}>
        {selectedOption === 'features' ? (
          <Features advertData={advertData} />
        ) : (
          <Reviews reviews={reviews} />
        )}
        <Booking />
      </div>
    </div>
  );
};

export default ModalCard;
