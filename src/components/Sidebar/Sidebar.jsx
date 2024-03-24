import styles from './styles.module.css';
import sprite from '../../icons/icons.svg';
import {
  changeEquipment,
  changeLocation,
  changeType,
} from '../../redux/filter/filterSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Sidebar = () => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedEquipment, setSelectedEquipment] = useState([]);

  const handleTypeChange = e => setSelectedType(e.target.value);
  const handleEquipmentChange = e => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedEquipment(prevState => [...prevState, value]);
    } else {
      setSelectedEquipment(prevState =>
        prevState.filter(item => item !== value)
      );
    }
  };

  const dispatch = useDispatch();

  const setFilters = location => {
    dispatch(changeEquipment(selectedEquipment));
    dispatch(changeType(selectedType));
    dispatch(changeLocation(location));
  };

  const resetFilters = () => {
    setSelectedEquipment([]);
    setSelectedType('');
  };

  return (
    <aside className={styles.aside}>
      <form
        action="submit"
        onSubmit={e => {
          setFilters(e.target.elements[0].value);
          e.preventDefault();
        }}
        className={styles.form}
      >
        <label style={{ marginLeft: 5 }}>
          Location
          <input
            type="text"
            name="location"
            className={styles.locationInput}
            placeholder="Location"
          />
        </label>
        <p className={styles.filtersTitle}>Filters</p>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Vehicle equipment</legend>
          <hr className={styles.hr} />
          <ul className={styles.inputList}>
            <li className={styles.inputItem}>
              <input
                type="checkbox"
                id="airConditioner"
                name="equipment"
                value="airConditioner"
                className={styles.input}
                onChange={handleEquipmentChange}
              />

              <label htmlFor="airConditioner" className={styles.inputLabel}>
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
                onChange={handleEquipmentChange}
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
                onChange={handleEquipmentChange}
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
                id="TV"
                name="equipment"
                value="TV"
                className={styles.input}
                onChange={handleEquipmentChange}
              />
              <label htmlFor="TV" className={styles.inputLabel}>
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
                onChange={handleEquipmentChange}
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
                id="panelTruck"
                name="type"
                value="panelTruck"
                className={styles.input}
                onChange={handleTypeChange}
              />
              <label htmlFor="panelTruck" className={styles.inputLabel}>
                <svg width={40} height={28} className={styles.listIcon}>
                  <use xlinkHref={`${sprite}#icon-van`} />
                </svg>
                Panel Truck
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="fullyIntegrated"
                name="type"
                value="fullyIntegrated"
                className={styles.input}
                onChange={handleTypeChange}
              />
              <label htmlFor="fullyIntegrated" className={styles.inputLabel}>
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
                onChange={handleTypeChange}
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
        <button
          type="button"
          onClick={e => {
            e.target.form.reset();
            resetFilters();
          }}
        >
          Clear filters
        </button>
        <button className={styles.searchBtn}>Search</button>
      </form>
    </aside>
  );
};

export default Sidebar;
