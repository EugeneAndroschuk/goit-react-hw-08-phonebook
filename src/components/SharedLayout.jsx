import { Outlet } from 'react-router-dom';
import AppBar from './AppBar/AppBar';

const SharedLayout = () => {
  return (
    <div>
      <AppBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;
