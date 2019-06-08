import React, { Suspense, memo, lazy } from 'react';
import LinearProgress from './components/LinearProgress';

const Home = lazy(() => import('./views//Home'));

function App() {
  return (
    <React.Fragment>
      <header className="app-header"></header>
      <div className="app-body">
        <Suspense fallback={<LinearProgress />}>
          <Home />
        </Suspense>
      </div>
      <footer className="app-footer">&copy; 2019 Rafael De Leon.</footer>
    </React.Fragment>
  );
}

export default memo(App);
