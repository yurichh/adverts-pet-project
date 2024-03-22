import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
} from 'redux-persist';
import { advertsSlice } from './adverts/advertsSlice';
import { filterSlice } from './filter/filterSlice';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

/* _________________________________________ PERSIST ____________________________________________*/
const advertsPersistConfig = {
  key: 'adverts',
  storage,
  whitelist: ['favorites'],
};
const root = combineReducers({
  filter: filterSlice.reducer,
  adverts: persistReducer(advertsPersistConfig, advertsSlice.reducer),
});

/* _________________________________________ STORE ____________________________________________*/

export const store = configureStore({
  reducer: root,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
