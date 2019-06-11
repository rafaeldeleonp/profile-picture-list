import './style.scss';
import React, { memo, useState } from 'react';
import classnames from 'classnames';

interface ImageProps {
  id: string;
  src: string;
  likes: number;
  comments: number;
  onClick(id: string): void;
}

function Image({ id, src, likes, comments, onClick }: ImageProps) {
  const [isLoading, setLoading] = useState(true);
  const imgCls = classnames('img', {
    'is-loading': isLoading,
  });

  const handleClick = () => {
    onClick(id);
  };

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div className="image-wrapper" onClick={handleClick}>
      <img
        className={imgCls}
        src={src}
        alt="La otra foto"
        onLoad={handleLoad}
      />
    </div>
  );
}

export default memo(Image);
