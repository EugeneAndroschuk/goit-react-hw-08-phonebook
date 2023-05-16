import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import css from "./AuthMenu.module.css";

const AuthMenu = () => {
  return (
    <ul className={css.authMenu}>
      <li>
        <NavLink to="/register">
          <Button variant="contained">Register Page</Button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/login">
          <Button variant="contained">Login Page</Button>
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthMenu;