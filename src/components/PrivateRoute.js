import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUserIsLoggedIn } from "redux/selectors";

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getUserIsLoggedIn);

  return (isLoggedIn ? Component : <Navigate to={redirectTo} />);
};

export default PrivateRoute;