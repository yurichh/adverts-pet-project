import styles from './styles.module.css';
import sprite from '../../icons/icons.svg';
import { useState, useRef, useEffect } from 'react';
import Features from 'components/Features/Features';
import Reviews from 'components/Reviews/Reviews';
import Booking from 'components/Booking/Booking';

const ModalCard = ({ advertData, onClose, scrollToReview = false }) => {
  const { gallery, price, name, rating, location, description, reviews } =
    advertData;

  const [needScroll, setNeedScroll] = useState(scrollToReview);
  const [showText, setShowText] = useState(false);

  const [selectedOption, setSelectedOption] = useState('features');

  useEffect(() => {
    if (needScroll) {
      setSelectedOption('reviews');
      scrollToReviews();
    }

    return () => {
      setNeedScroll(false);
    };
  }, [needScroll]);

  const reviewsRef = useRef(null);

  const scrollToReviews = () => {
    reviewsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.topLine}>
        <h1 className={styles.name}>{name}</h1>
        <button
          type="button"
          className={styles.closeContainer}
          onClick={onClose}
        >
          <div className={styles.leftright}></div>
          <div className={styles.rightleft}></div>
        </button>
      </div>
      <div className={styles.infoLine}>
        <div className={styles.ratLocWrapper}>
          <button
            className={styles.ratingBtn}
            type="button"
            onClick={() => setNeedScroll(true)}
          >
            <svg width={16} height={16} className={styles.ratingIcon}>
              <use xlinkHref={`${sprite}#icon-star`} />
            </svg>
            <p
              className={styles.ratingText}
            >{`${rating} (${reviews.length} reviews)`}</p>
          </button>
          <div className={styles.location}>
            <svg width={16} height={16} className={styles.locationIcon}>
              <use xlinkHref={`${sprite}#icon-map-pin`} />
            </svg>
            <p className={styles.locationText}>{location}</p>
          </div>
        </div>
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
      <p
        onClick={() => setShowText(prev => !prev)}
        className={
          showText
            ? styles.description
            : `${styles.description} ${styles.fullDescr}`
        }
      >
        {description}
      </p>
      <div className={styles.optionWrapper}>
        <input
          type="radio"
          name="option"
          id="features"
          defaultChecked
          className={styles.optionRadio}
          onChange={() => setSelectedOption('features')}
        ></input>
        <label htmlFor="features" className={styles.optionLabel}>
          Features
        </label>
        <input
          checked={selectedOption === 'reviews'}
          type="radio"
          name="option"
          id="reviews"
          className={styles.optionRadio}
          onChange={() => setSelectedOption('reviews')}
        ></input>
        <label htmlFor="reviews" className={styles.optionLabel}>
          Reviews
        </label>
      </div>
      <hr className={styles.hr} />
      <div className={styles.featRevMenu} ref={reviewsRef}>
        {selectedOption === 'features' ? (
          <Features advertData={advertData} />
        ) : (
          <div>
            <Reviews reviews={reviews} />
          </div>
        )}
        <Booking />
      </div>
    </div>
  );
};

export default ModalCard;
