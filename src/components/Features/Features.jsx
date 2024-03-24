import styles from './styles.module.css';
import sprite from '../../icons/icons.svg';

const Features = ({ advertData }) => {
  const {
    details,
    adults,
    transmission,
    engine,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = advertData;
  return (
    <div className={styles.wrapper}>
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
        {details.airConditioner >= 1 && (
          <li className={styles.listItem}>
            <svg width={20} height={20} className={styles.listIcon}>
              <use xlinkHref={`${sprite}#icon-AC`} />
            </svg>
            <p className={styles.listItemText}>AC</p>
          </li>
        )}
        {details.CD >= 1 && (
          <li className={styles.listItem}>
            <svg width={20} height={20} className={styles.listIcon2}>
              <use xlinkHref={`${sprite}#icon-CD`} />
            </svg>
            <p className={styles.listItemText}>CD</p>
          </li>
        )}
        {details.radio >= 1 && (
          <li className={styles.listItem}>
            <svg width={20} height={20} className={styles.listIcon2}>
              <use xlinkHref={`${sprite}#icon-radio`} />
            </svg>
            <p className={styles.listItemText}>Radio</p>
          </li>
        )}
        {details.hob >= 1 && (
          <li className={styles.listItem}>
            <svg width={20} height={20} className={styles.listIcon}>
              <use xlinkHref={`${sprite}#icon-hob`} />
            </svg>
            <p className={styles.listItemText}>{details.hob} hob</p>
          </li>
        )}
      </ul>
      <h3 className={styles.title}>Vehicle details</h3>
      <hr className={styles.hr} />
      <ul className={styles.detailsList}>
        <li className={styles.detailsItem}>
          <p className={styles.detailOption}>Form</p>
          <p className={styles.detailValue}>{form}</p>
        </li>
        <li className={styles.detailsItem}>
          <p className={styles.detailOption}>Length</p>
          <p className={styles.detailValue}>{length}</p>
        </li>
        <li className={styles.detailsItem}>
          <p className={styles.detailOption}>Width</p>
          <p className={styles.detailValue}>{width}</p>
        </li>
        <li className={styles.detailsItem}>
          <p className={styles.detailOption}>Height</p>
          <p className={styles.detailValue}>{height}</p>
        </li>
        <li className={styles.detailsItem}>
          <p className={styles.detailOption}>Tank</p>
          <p className={styles.detailValue}>{tank}</p>
        </li>
        <li className={styles.detailsItem}>
          <p className={styles.detailOption}>Consumption</p>
          <p className={styles.detailValue}>{consumption}</p>
        </li>
      </ul>
    </div>
  );
};

export default Features;
