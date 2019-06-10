import './style.scss';
import React from 'react';
import ProfilePicture from '../../ProfilePicture';

interface CommentProps {
  profileSrc: string;
  name: string;
  content: string;
}

function Comment({ profileSrc, name, content }: CommentProps) {
  return (
    <div className="comment">
      <ProfilePicture src={profileSrc}></ProfilePicture>
      <div className="comment-wrapper">
        <div className="comment-username">{name}</div>
        <p className="comment-content">{content}</p>
      </div>
    </div>
  );
}

export default Comment;
