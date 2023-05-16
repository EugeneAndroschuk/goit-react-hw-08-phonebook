import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUserIsLoggedIn, getUserIsRefreshing } from "redux/selectors";

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getUserIsLoggedIn);
  const isRefreshing = useSelector(getUserIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
  
};

export default PrivateRoute;