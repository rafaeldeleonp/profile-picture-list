import React, { Suspense, memo, lazy } from 'react';
import SVG from 'react-inlinesvg';
import LinearProgress from './components/LinearProgress';
import LogoWhite from './resources/svg/logo-white.svg';

const Home = lazy(() => import('./views//Home'));

function App() {
  return (
    <React.Fragment>
      <header className="app-header">
        <SVG className="logo" src={LogoWhite} />
      </header>
      <div className="app-body">
        <Suspense fallback={<LinearProgress />}>
          <Home />
        </Suspense>
      </div>
    </React.Fragment>
  );
}

export default memo(App);
