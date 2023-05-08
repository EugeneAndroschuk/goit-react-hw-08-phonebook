import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { userRegister, userLogIn, userLogout } from './thunks';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addMatcher(
        isAnyOf(userRegister.fulfilled, userLogIn.fulfilled),
        (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(isAnyOf(userLogout.fulfilled), (state) => {
          state.user = { email: null, password: null };
          state.token = null;
          state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;