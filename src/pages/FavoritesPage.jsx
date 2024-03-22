import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/adverts/selectors';
import AdvertItem from 'components/AdvertItem/AdvertItem';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  return favorites.length === 0 ? (
    <div style={{}}>Oooops... No favorites here </div>
  ) : (
    <ul
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        maxWidth: 888,
        padding: 20,
      }}
    >
      {favorites.map(item => (
        <AdvertItem advertData={item} key={item._id} />
      ))}
    </ul>
  );
};

export default FavoritesPage;
