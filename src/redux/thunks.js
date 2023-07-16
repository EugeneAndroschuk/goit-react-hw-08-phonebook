import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://db-phonebook-olo8.onrender.com';

// Utility to add JWT
const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

// USER operations

export const userRegister = createAsyncThunk(
  'auth/userRegister',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/api/users/register', credentials);
      setAuthToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userLogIn = createAsyncThunk(
  'auth/userLogIn',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/api/users/login', credentials);
      setAuthToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userLogout = createAsyncThunk(
  'auth/userLogout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/api/users/logout');
      clearAuthToken();
      // return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userRefresh = createAsyncThunk(
  'auth/userRefresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const localStorageToken = state.auth.token;
    if(localStorageToken === null) return thunkAPI.rejectWithValue();

    try {
      setAuthToken(localStorageToken);
      const response = await axios.get('/api/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// CONTACTS operations

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact ',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/api/contacts', credentials);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact ',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(
        `/api/contacts/${contactId}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact ',
  async ({contactId, name, phone, email}, thunkAPI) => {
    try {
      const response = await axios.put(`/api/contacts/${contactId}`, {name, phone, email});
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
