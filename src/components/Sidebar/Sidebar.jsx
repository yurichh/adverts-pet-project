import styles from './styles.module.css';

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
            <li>
              <input
                type="checkbox"
                id="ac"
                name="equipment"
                value="ac"
                className={styles.input}
              />
              <label htmlFor="ac" className={styles.inputLabel}>
                AC
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="automatic"
                name="equipment"
                value="automatic"
                className={styles.input}
              />
              <label htmlFor="automatic" className={styles.inputLabel}>
                Automatic
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
