import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUserIsLoggedIn } from "redux/selectors";

const RestrictedRoute = ({component: Component, redirectTo="/"}) => {
    const isLoggedIn = useSelector(getUserIsLoggedIn);

    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}

export default RestrictedRoute;