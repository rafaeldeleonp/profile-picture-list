import './style.scss';
import React from 'react';
import ProfilePicture from '../../ProfilePicture';
import Content from '../Content';
import LikeBtn from '../LikeBtn';
import { BaseCommentProps } from '../comments-definitions';

function Reply({ profileSrc, name, content }: BaseCommentProps) {
  return (
    <div className="reply">
      <ProfilePicture src={profileSrc}></ProfilePicture>
      <Content name={name} content={content} />
      <LikeBtn />
    </div>
  );
}

export default Reply;
