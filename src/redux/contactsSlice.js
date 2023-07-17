import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
  updateContactFavorite,
  userLogout,
} from './thunks';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending,
          updateContact.pending,
          updateContactFavorite.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected,
          updateContact.rejected,
          updateContactFavorite.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(isAnyOf(fetchContacts.fulfilled), (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addMatcher(isAnyOf(addContact.fulfilled), (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addMatcher(isAnyOf(deleteContact.fulfilled), (state, action) => {
        state.isLoading = false;
        state.error = null;
        // state.items.filter(contact => contact.id !== action.payload.id);
        const index = state.items.findIndex(
          contact => contact._id === action.payload._id
        );
        state.items.splice(index, 1);
      })
      .addMatcher(
        isAnyOf(updateContact.fulfilled, updateContactFavorite.fulfilled),
        (state, action) => {
          state.isLoading = false;
          state.error = null;
          // state.items.filter(contact => contact.id !== action.payload.id);
          const index = state.items.findIndex(
            contact => contact._id === action.payload._id
          );
          state.items.splice(index, 1, action.payload);
        }
      )
      .addMatcher(isAnyOf(userLogout.fulfilled), state => {
        state.isLoading = false;
        state.error = null;
        state.items = [];
      });
  },
});

export const contactsReducer = contactsSlice.reducer;