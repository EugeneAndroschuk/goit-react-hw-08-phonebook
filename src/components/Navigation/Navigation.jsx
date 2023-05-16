import { useSelector, useDispatch } from "react-redux";
import { getUserIsLoggedIn, getUserIsRefreshing } from "redux/selectors";
import { Toolbar, AppBar } from '@mui/material';
import css from "./Navigation.module.css";
import AuthMenu from "components/AuthMenu/AuthMenu";
import commonCss from '../../css/common.module.css';
import { setTheme } from 'redux/authSlice';
import SwitchTheme from 'components/SwitchTheme/SwitchTheme';
import UserMenu from "components/UserMenu/UserMenu";
import MainMenu from "components/MainMenu/MainMenu";

const Navigation = () => {
  const isLoggedIn = useSelector(getUserIsLoggedIn);
  const isRefreshing = useSelector(getUserIsRefreshing);
  const dispatch = useDispatch();

  const handleChangeTheme = e => {
    if (e.target.checked) dispatch(setTheme('dark'));
    else dispatch(setTheme('light'));
  };

  return (
    <AppBar component="header" position="static">
      <div className={commonCss.container}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <MainMenu />

          <div className={css.menu}>
            {!isLoggedIn && !isRefreshing && <AuthMenu />}

            <div className={css.userMenu}>
              {isLoggedIn && <UserMenu />}
              <SwitchTheme sx={{ m: 1 }} onChange={handleChangeTheme} />
            </div>
          </div>
        </Toolbar>
      </div>
    </AppBar>
  );
}

export default Navigation;