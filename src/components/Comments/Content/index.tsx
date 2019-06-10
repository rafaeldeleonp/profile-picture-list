import './style.scss';
import React from 'react';
import SVG from 'react-inlinesvg';
import ThreeDotsLogo from '../../../resources/svg/logo-three-dots.svg';
import { ContentProps } from '../comments-definitions';

const REPLIES = 3;

function Content({
  name,
  content,
  totalReplies = 0,
  counter = 0,
  onRepliesClick,
}: ContentProps) {
  return (
    <div className="content-wrapper">
      <div className="content-username">{name}</div>
      <p className="content-message">{content}</p>
      <button className="content-replies-btn" onClick={onRepliesClick}>
        {(totalReplies > 0 || counter > 0) && (
          <SVG className="three-dots-logo" src={ThreeDotsLogo} />
        )}
        {totalReplies > 0 && <div>{`View replies (${totalReplies})`}</div>}
        {totalReplies === 0 && counter > 0 && <div>Hide replies</div>}
      </button>
    </div>
  );
}

export default Content;
