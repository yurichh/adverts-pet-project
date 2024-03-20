import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from './operations';

const handlePending = state => ({ ...state, isLoading: true });
const handleReject = (state, action) => ({
  ...state,
  isLoading: false,
  error: action.payload,
});

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => ({
        ...state,
        items: action.payload,
        isLoading: false,
        error: null,
      }))
      .addCase(fetchContacts.rejected, handleReject)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        return {
          ...state,
          items: [...state.items, action.payload],
          isLoading: false,
          error: null,
        };
      })
      .addCase(addContact.rejected, handleReject)

      .addCase(removeContact.pending, handlePending)
      .addCase(removeContact.fulfilled, (state, action) => {
        return {
          ...state,
          items: state.items.filter(contact => contact.id !== action.payload),
          isLoading: false,
          error: null,
        };
      })
      .addCase(removeContact.rejected, handleReject),
});
