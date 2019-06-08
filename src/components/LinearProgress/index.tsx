import './style.scss';
import React, { memo } from 'react';

function LinearProgress({ loading = true }: { loading?: boolean }) {
  if (!loading) {
    return null;
  }

  return (
    <div className="linear-progress">
      <div className="linear-progress-bar linear-progress-bar1" />
      <div className="linear-progress-bar linear-progress-bar2" />
    </div>
  );
}

export default memo(LinearProgress);
