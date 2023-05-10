import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getUserIsLoggedIn } from 'redux/selectors';

const AppBar = () => {
  const isLoggedIn = useSelector(getUserIsLoggedIn);
  return (
    <header style={{ display: 'flex', gap: 50 }}>
      <Navigation />
      {isLoggedIn && <UserMenu />}
    </header>
  );
};

export default AppBar;
