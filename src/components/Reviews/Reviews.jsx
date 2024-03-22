import styles from './styles.module.css';
import Review from './Review/Review';

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.wrapper}>
      {reviews.length === 0 ? (
        <p className={styles.noReviews}>Oooops... No reviews here</p>
      ) : (
        <ul>
          {reviews.map(review => (
            <Review review={review} key={review.reviewer_name} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
