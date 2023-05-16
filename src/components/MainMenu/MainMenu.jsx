import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button, Badge } from "@mui/material";
import {
  getContacts,
  getUserIsLoggedIn,
  getUserIsRefreshing,
} from 'redux/selectors';
import css from "./MainMenu.module.css";

const MainMenu = () => {
    const contacts = useSelector(getContacts);
    const isLoggedIn = useSelector(getUserIsLoggedIn);
    const isRefreshing = useSelector(getUserIsRefreshing);

    return (
      <ul className={css.mainMenu}>
        <li>
          <NavLink to="/">
            <Button variant="contained">Home</Button>
          </NavLink>
        </li>

        {isLoggedIn && !isRefreshing && (
          <li>
            <NavLink to="/contacts">
              <Badge badgeContent={contacts.length} color="secondary">
                <Button variant="contained">Contacts</Button>
              </Badge>
            </NavLink>
          </li>
        )}
      </ul>
    );
}

export default MainMenu;