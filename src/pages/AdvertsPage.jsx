import Sidebar from './../components/Sidebar';
import AdvertsWrapper from '../components/AdvertWrapper/AdvertsWrapper';

const ContactsPage = () => {
  return (
    <div style={{ display: 'flex', gap: '0 64px' }}>
      <Sidebar />
      <AdvertsWrapper />
    </div>
  );
};

export default ContactsPage;
