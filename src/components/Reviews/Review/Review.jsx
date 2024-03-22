import { Rating } from '@mui/material';
import styles from './styles.module.css';

const Review = ({ review }) => {
  const { reviewer_name, reviewer_rating, comment } = review;
  return (
    <li className={styles.wrapper}>
      <h3 className={styles.ava}>{reviewer_name[0]}</h3>
      <div className={styles.nameRatingWrapper}>
        <h3 className={styles.name}>{reviewer_name}</h3>
        <Rating
          name="read-only"
          value={reviewer_rating}
          readOnly
          size="small"
        />
      </div>
      <p className={styles.comment}>{comment}</p>
    </li>
  );
};

export default Review;
