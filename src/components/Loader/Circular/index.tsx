import React, { memo } from 'react';
import Loader from 'react-loader-spinner';

interface CircularLoaderProps {
  loading?: boolean;
  color: string;
  width: string;
  height: string;
}

function CircularLoader({
  loading = true,
  color,
  width,
  height,
}: CircularLoaderProps) {
  if (!loading) {
    return null;
  }

  return <Loader type="TailSpin" color={color} height={height} width={width} />;
}

export default memo(CircularLoader);
