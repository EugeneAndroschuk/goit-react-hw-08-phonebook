import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { userRegister, userLogIn, userLogout, userRefresh } from './thunks';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRegistered: false,
  isRefreshing: false,
  theme: 'light',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    errorReset: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(userLogIn.rejected), (state, action) => {
        state.error = action.payload;
        state.isLoggedIn = false;
      })
      .addMatcher(
        isAnyOf(userRegister.fulfilled),
        (state, action) => {
          state.user = action.payload.user;
          // state.token = action.payload.token;
          state.isRegistered = true;
        }
      )
      .addMatcher(
        isAnyOf(userLogIn.fulfilled),
        (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(isAnyOf(userLogout.fulfilled), state => {
        state.user = { email: null, password: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRegistered = false;
      })
      .addMatcher(isAnyOf(userRefresh.pending), state => {
        state.isRefreshing = true;
      })
      .addMatcher(isAnyOf(userRefresh.fulfilled), (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addMatcher(isAnyOf(userRefresh.rejected), state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { setTheme, errorReset } = authSlice.actions;