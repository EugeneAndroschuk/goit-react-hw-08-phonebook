import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';

const AppBar = () => {
  return (
    <header>
      <Navigation />
      <UserMenu />
    </header>
  );
};

export default AppBar;
