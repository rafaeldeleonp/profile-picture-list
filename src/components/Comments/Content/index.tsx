import './style.scss';
import React from 'react';
import SVG from 'react-inlinesvg';
import ThreeDotsLogo from '../../../resources/svg/logo-three-dots.svg';
import LoaderCircular from '../../Loader/Circular';
import { ContentProps } from '../comments-definitions';

function Content({
  name,
  content,
  loadingReplies = false,
  totalReplies = 0,
  counter = 0,
  loadMoreReplies,
}: ContentProps) {
  return (
    <div className="content-wrapper">
      <div className="content-username">{name}</div>
      <p className="content-message">{content}</p>
      <div className="content-loader-container">
        <LoaderCircular
          loading={loadingReplies}
          color="black"
          width="16"
          height="16"
        />
      </div>
      {!loadingReplies && (
        <button className="content-replies-btn" onClick={loadMoreReplies}>
          {(totalReplies > 0 || counter > 0) && (
            <SVG className="three-dots-logo" src={ThreeDotsLogo} />
          )}
          {totalReplies > 0 && <div>{`View replies (${totalReplies})`}</div>}
          {totalReplies === 0 && counter > 0 && <div>Hide replies</div>}
        </button>
      )}
    </div>
  );
}

export default Content;
