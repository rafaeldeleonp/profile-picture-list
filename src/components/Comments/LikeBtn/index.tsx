import './style.scss';
import React, { memo, useState } from 'react';
import classnames from 'classnames';
import SVG from 'react-inlinesvg';
import LikeSVG from '../../../resources/svg/like.svg';

function LikeBtn() {
  const randomBoolean = Math.random() >= 0.5;
  const [liked, setLike] = useState<boolean>(randomBoolean);
  const likeCls = classnames('comment-like', {
    'is-like': liked,
  });

  const handleLike = () => {
    setLike(!liked);
  };

  return (
    <button onClick={handleLike}>
      <SVG className={likeCls} src={LikeSVG} />
    </button>
  );
}

export default memo(LikeBtn);
