import './style.scss';
import React, { useState } from 'react';
import ProfilePicture from '../../ProfilePicture';
import Content from '../Content';
import LikeBtn from '../LikeBtn';
import Reply from '../Reply';
import { CommentProps, RepliesState } from '../comments-definitions';

const REPLIES_LIMIT = 3;

function Comment({ profileSrc, name, content, replies }: CommentProps) {
  const [replyState, setReplyState] = useState<RepliesState>({
    replies: [],
    clickCounter: 0,
    total: replies.length,
  });

  const loadMoreReplies = () => {
    const value = replyState.total - REPLIES_LIMIT;
    let total = replyState.total;
    let counter = replyState.clickCounter;

    if (total === 0 && replyState.clickCounter > 0) {
      total = replies.length;
      counter = 0;
    } else {
      total = value > 0 ? value : 0;
      counter = replyState.clickCounter + 1;
    }

    const startIndex =
      replyState.replies.length === 0 ? replies.length - REPLIES_LIMIT : total;

    setReplyState({
      replies: replies.slice(startIndex, replies.length),
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
          totalReplies={replyState.total}
          counter={replyState.clickCounter}
          loadMoreReplies={loadMoreReplies}
        />
        <LikeBtn />
      </div>
      {replyState.clickCounter > 0 && (
        <div className="comment-replies-container">
          {replyState.replies.map(reply => (
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
