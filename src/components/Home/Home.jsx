import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

const Home = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroWrapper}>
          <h2 className={styles.heroTitle}>Welcome to Camper Rentals</h2>
          <p className={styles.heroText}>
            Discover the freedom of the open road with our wide selection of
            camper rentals.
          </p>
          <NavLink to="/catalog" className={styles.heroLink}>
            Rent now
          </NavLink>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.featuresWrapper}>
          <h2 className={styles.featuresTitle}>Why Choose Us?</h2>
          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>Quality Campers</h3>
            <p className={styles.featureText}>
              We offer top-quality campers from leading manufacturers.
            </p>
          </div>
          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>Flexible Rentals</h3>
            <p className={styles.featureText}>
              Choose from daily, weekly, or monthly rental options to suit your
              needs.
            </p>
          </div>
          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>24/7 Support</h3>
            <p className={styles.featureText}>
              Our customer support team is available round the clock to assist
              you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
