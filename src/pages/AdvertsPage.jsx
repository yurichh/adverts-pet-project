import Sidebar from '../components/Sidebar/Sidebar';
import AdvertsWrapper from '../components/AdvertWrapper/AdvertsWrapper';

const ContactsPage = () => {
  return (
    <div style={{ display: 'flex', gap: '0 40px' }}>
      <Sidebar />
      <AdvertsWrapper />
    </div>
  );
};

export default ContactsPage;
