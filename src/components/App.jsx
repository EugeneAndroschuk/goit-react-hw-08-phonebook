import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { userRefresh } from 'redux/thunks';
import SharedLayout from './SharedLayout';
import Contacts from '../pages/Contacts';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Home from '../pages/Home';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import { getUserIsRefreshing } from 'redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getUserIsRefreshing);

  useEffect(() => {
    dispatch(userRefresh());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          {!isRefreshing && (
            <>
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/" component={<Contacts />} />
                }
              />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<Register />}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<Login />}
                  />
                }
              />
            </>
          )}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
