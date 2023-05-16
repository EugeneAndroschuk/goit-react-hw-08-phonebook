import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { userRefresh } from 'redux/thunks';
import SharedLayout from './SharedLayout';
import Contacts from '../pages/Contacts';
import Register from '../pages/Register';
import Login from '../pages/Login';
// import Home from '../pages/Home';
import Loader from './Loader/Loader';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import { getUserIsRefreshing, getUserTheme } from 'redux/selectors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import css from "./App.module.css";

const HomePage = lazy(() => import('../pages/Home'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const App = () => {
  const theme = useSelector(getUserTheme);
  const isDarkTheme = theme === 'light' ? false : true;
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getUserIsRefreshing);

  useEffect(() => {
    dispatch(userRefresh());
  }, [dispatch]);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
          </Route>
        </Routes>
      )}
    </ThemeProvider>
  );
};

export default App;
