import { useSelector, useDispatch } from "react-redux";
import { getUserEmail } from "redux/selectors";
import { userLogout } from "redux/thunks";
import { Button } from "@mui/material";
import css from "./UserMenu.module.css";

const UserMenu = () => {
    const userEmail = useSelector(getUserEmail);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(userLogout());
    }

    return (
      <div className={css.menu}>
        <p>{userEmail}</p>
        <Button variant="contained" onClick={handleClick}>
          Logout
        </Button>
      </div>
    );
}

export default UserMenu;