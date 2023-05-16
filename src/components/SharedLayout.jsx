import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

const SharedLayout = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Suspense fallback={<div>Is Loading</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default SharedLayout;
