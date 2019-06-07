import React, { Suspense, memo } from 'react';

function App() {
  return <Suspense fallback={<div>Loading...</div>}></Suspense>;
}

export default memo(App);
