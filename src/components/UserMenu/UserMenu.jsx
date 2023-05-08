import { useSelector, useDispatch } from "react-redux";
import { getUserEmail } from "redux/selectors";
import { userLogout } from "redux/thunks";

const UserMenu = () => {
    const userEmail = useSelector(getUserEmail);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(userLogout());
    }

    return (
      <div>
            <p>{ userEmail }</p>
        <button onClick={handleClick}>Logout</button>
      </div>
    );
}

export default UserMenu;