import './style.scss';
import React, { useState } from 'react';
import ProfilePicture from '../../ProfilePicture';
import Content from '../Content';
import LikeBtn from '../LikeBtn';
import Reply from '../Reply';
import { CommentProps, RepliesState } from '../comments-definitions';

const REPLIES = 3;

function Comment({ profileSrc, name, content, replies }: CommentProps) {
  const [state, setState] = useState<RepliesState>({
    clickCounter: 0,
    total: replies.length,
  });

  const handleRepliesClick = () => {
    const value = state.total - REPLIES;
    let total = state.total;
    let counter = state.clickCounter;

    if (total === 0 && state.clickCounter > 0) {
      total = replies.length;
      counter = 0;
    } else {
      total = value > 0 ? value : 0;
      counter = state.clickCounter + 1;
    }

    setState({
      clickCounter: counter,
      total: total,
    });
  };
  return (
    <div className="comment">
      <div className="comment-wrapper">
        <ProfilePicture src={profileSrc}></ProfilePicture>
        <Content
          name={name}
          content={content}
          totalReplies={state.total}
          counter={state.clickCounter}
          onRepliesClick={handleRepliesClick}
        />
        <LikeBtn />
      </div>
      {state.clickCounter > 0 && (
        <div className="comment-replies-container">
          {replies.map(reply => (
            <Reply
              profileSrc={reply.profileSrc}
              name={reply.name}
              content={reply.content}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Comment;
