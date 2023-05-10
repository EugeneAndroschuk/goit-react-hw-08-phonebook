import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUserIsLoggedIn, getUserIsRefreshing } from "redux/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(getUserIsLoggedIn);
  const isRefreshing = useSelector(getUserIsRefreshing);
    return (
      <nav>
        <ul style={{ display: 'flex', gap: 20, listStyle: 'none' }}>
          <li>
            <NavLink to="/">Home Page</NavLink>
          </li>

          {isLoggedIn && !isRefreshing && (
            <li>
              <NavLink to="/contacts">Contacts Page</NavLink>
            </li>
          )}
          {!isLoggedIn && !isRefreshing && (
            <>
              <li>
                <NavLink to="/register">Register Page</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login Page</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    );
}

export default Navigation;