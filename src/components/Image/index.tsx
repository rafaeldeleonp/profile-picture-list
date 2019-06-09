import './style.scss';
import React, { useState } from 'react';
import classnames from 'classnames';
import SVG from 'react-inlinesvg';
import CommentSvg from '../../resources/svg/comment.svg';
import LikeSvg from '../../resources/svg/like.svg';
import LogoThreeDots from '../../resources/svg/logo-three-dots.svg';

interface ImageProps {
  src: string;
  width: number;
  height: number;
  likes: number;
  comments: number;
  onClick(): void;
}

function Image({ src, width, height, likes, comments, onClick }: ImageProps) {
  const [isHovering, setHover] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const imgCls = classnames('img', {
    'is-loading': isLoading,
  });
  const overlayCls = classnames({
    overlay: isHovering,
  });

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleClick = () => {
    onClick();
  };

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div
      className="image-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <img
        className={imgCls}
        src={src}
        alt="La otra foto"
        width={width}
        height={height}
        onLoad={handleLoad}
      />
      <div
        style={{ width: `${width}px`, height: `${height}px` }}
        className={overlayCls}
      />
      {isHovering && (
        <div
          className="icons-overlay-container"
          style={{ width: `${width}px`, height: `${height}px` }}
        >
          <div className="icon-container">
            <div className="like-container">
              <SVG className="img-svg like-icon" src={LikeSvg} />
              <span className="label">{likes}</span>
            </div>
            <div className="comment-container">
              <SVG className="img-svg comment-icon" src={CommentSvg} />
              <span className="label">{comments}</span>
            </div>
          </div>
          <div className="img-watermark">
            <SVG className="logo" src={LogoThreeDots} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Image;
