import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout';
import { Suspense, lazy } from 'react';

const Homepage = lazy(() => import('../pages/Homepage'));
const AdvertsPage = lazy(() => import('../pages/AdvertsPage'));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage'));

const App = () => {
  return (
    <Suspense fallback={<span className="loader"></span>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/catalog" element={<AdvertsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
