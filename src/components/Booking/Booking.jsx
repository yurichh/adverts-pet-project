import styles from './styles.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import './datepicker.styles.css';

import DatePicker from 'react-datepicker';
import { useState } from 'react';
import enLocale from 'date-fns/locale/en-GB';
import Joi from 'joi';
import Notiflix from 'notiflix';

const validationSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .pattern(new RegExp('^[a-zA-Zа-яА-ЯґҐєЄіІїЇ]+$'))
    .required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net'] },
  }),
  date: Joi.string().required(),
  comment: Joi.string().max(200).optional(),
});

const Booking = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Book your campervan now</h3>
      <p className={styles.subtitle}>
        Stay connected! We are always ready to help you.
      </p>
      <form
        onSubmit={async e => {
          const bookData = {
            name: e.target[0].value,
            email: e.target[1].value,
            date: e.target[2].value,
            comment: e.target[3].value,
          };

          const data = await validationSchema.validate(bookData);

          if (data.error) {
            Notiflix.Notify.failure(data.error.message);
            e.preventDefault();
            return;
          }
          alert(JSON.stringify(data.value));
          e.preventDefault();
        }}
        className={styles.form}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={styles.input}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className={styles.input}
        />
        <DatePicker
          locale={enLocale}
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          onChange={update => {
            setDateRange(update);
          }}
          placeholderText="Booking range"
          className={styles.inputDate}
        />
        <textarea
          type="text"
          name="comment"
          placeholder="Comment"
          className={styles.textarea}
        />
        <button className={styles.sendBtn} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Booking;
