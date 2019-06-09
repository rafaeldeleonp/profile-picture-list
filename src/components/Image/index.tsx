import './style.scss';
import React, { useState } from 'react';
import classnames from 'classnames';

interface ImageProps {
  src: string;
  width: number;
  height: number;
}

function Image({ src, width, height }: ImageProps) {
  const [isHovering, setHover] = useState(false);
  const cls = classnames({
    overlay: isHovering,
  });

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      className="image-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className="img"
        src={src}
        alt="La otra foto"
        width={width}
        height={height}
      />
      <div
        style={{ width: `${width}px`, height: `${height}px` }}
        className={cls}
      />
    </div>
  );
}

export default Image;
