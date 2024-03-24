import styles from './styles.module.css';
import sprite from '../../icons/icons.svg';

const Sidebar = () => {
  return (
    <aside className={styles.aside}>
      <form
        action="submit"
        onSubmit={e => {
          e.preventDefault();
          console.log(e.target.elements);
        }}
        className={styles.form}
      >
        <input
          type="text"
          name="location"
          className={styles.locationInput}
          placeholder="Location"
        />
        <p className={styles.filtersTitle}>Filters</p>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Vehicle equipment</legend>
          <hr className={styles.hr} />
          <ul className={styles.inputList}>
            <li className={styles.inputItem}>
              <input
                type="checkbox"
                id="ac"
                name="equipment"
                value="ac"
                className={styles.input}
              />
              <label htmlFor="ac" className={styles.inputLabel}>
                <svg width={32} height={32} className={styles.listIcon}>
                  <use xlinkHref={`${sprite}#icon-AC`} />
                </svg>
                AC
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="radio"
                name="equipment"
                value="radio"
                className={styles.input}
              />
              <label htmlFor="radio" className={styles.inputLabel}>
                <svg width={32} height={32} className={styles.listIcon2}>
                  <use xlinkHref={`${sprite}#icon-radio`} />
                </svg>
                Radio
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="kitchen"
                name="equipment"
                value="kitchen"
                className={styles.input}
              />
              <label htmlFor="kitchen" className={styles.inputLabel}>
                <svg width={32} height={32} className={styles.listIcon2}>
                  <use xlinkHref={`${sprite}#icon-kitchen`} />
                </svg>
                Kitchen
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="tv"
                name="equipment"
                value="tv"
                className={styles.input}
              />
              <label htmlFor="tv" className={styles.inputLabel}>
                <svg width={32} height={32} className={styles.listIcon2}>
                  <use xlinkHref={`${sprite}#icon-TV`} />
                </svg>
                TV
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="shower"
                name="equipment"
                value="shower"
                className={styles.input}
              />
              <label htmlFor="shower" className={styles.inputLabel}>
                <svg width={32} height={32} className={styles.listIcon2}>
                  <use xlinkHref={`${sprite}#icon-shower`} />
                </svg>
                Shower/WC
              </label>
            </li>
          </ul>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Vehicle type</legend>
          <hr className={styles.hr} />
          <ul className={styles.inputList}>
            <li>
              <input
                type="radio"
                id="van"
                name="type"
                value="van"
                className={styles.input}
              />
              <label htmlFor="van" className={styles.inputLabel}>
                <svg width={40} height={28} className={styles.listIcon}>
                  <use xlinkHref={`${sprite}#icon-van`} />
                </svg>
                Van
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="fully"
                name="type"
                value="fully"
                className={styles.input}
              />
              <label htmlFor="fully" className={styles.inputLabel}>
                <svg width={40} height={28} className={styles.listIcon}>
                  <use xlinkHref={`${sprite}#icon-fully`} />
                </svg>
                Fully Integrated
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="alcove"
                name="type"
                value="alcove"
                className={styles.input}
              />
              <label htmlFor="alcove" className={styles.inputLabel}>
                <svg width={40} height={28} className={styles.listIcon}>
                  <use xlinkHref={`${sprite}#icon-alcove`} />
                </svg>
                Alcove
              </label>
            </li>
          </ul>
        </fieldset>
        <button className={styles.searchBtn}>Search</button>
      </form>
    </aside>
  );
};

export default Sidebar;
