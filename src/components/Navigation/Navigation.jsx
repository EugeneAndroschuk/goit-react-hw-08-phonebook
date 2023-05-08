import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home Page</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts Page</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register Page</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login Page</NavLink>
          </li>
        </ul>
      </nav>
    );
}

export default Navigation;