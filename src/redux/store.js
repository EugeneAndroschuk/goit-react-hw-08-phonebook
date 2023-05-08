import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import filterSlice from './filterSlice';
import { contactsReducer } from './contactsSlice';
import { authReducer } from './authSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persisteAuthReducer = persistReducer(persistConfig, authReducer);

 export const store = configureStore({
   reducer: {
     auth: persisteAuthReducer,
     contacts: contactsReducer,
     filter: filterSlice.reducer,
   },
   middleware: getDefaultMiddleware =>
     getDefaultMiddleware({
       serializableCheck: {
         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
       },
     }),
 });

 export const persistor = persistStore(store);