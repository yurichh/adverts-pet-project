// import { createSelector } from '@reduxjs/toolkit';
// import { selectFilter } from '../filter/selectors';

export const selectAdverts = state => state.adverts.items;
export const selectFavorites = state => state.adverts.favorites;
export const selectIsLoading = state => state.adverts.isLoading;
export const selectError = state => state.adverts.error;

// export const selectFilteredContacts = createSelector(
//   [selectAdverts, selectFilter],
//   (contacts, filter) => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   }
// );
