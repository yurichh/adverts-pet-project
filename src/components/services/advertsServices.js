import axios from 'axios';
import Notiflix from 'notiflix';
axios.defaults.baseURL =
  'https://658bf2b8859b3491d3f5226d.mockapi.io/adverts/campers';

export const fetchAdverts = async () => {
  try {
    const { data } = await axios.get();
    return data;
  } catch (error) {
    Notiflix.Notify.failure(error);
    return;
  }
};
