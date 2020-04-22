import './style.scss';
import React, { memo } from 'react';
import ProfilePicture from '../../ProfilePicture';
import Content from '../Content';
import LikeBtn from '../LikeBtn';
import { BaseCommentProps } from '../comments-definitions';

function Reply({ profile, name, content }: BaseCommentProps) {
  return (
    <div className="reply">
      <ProfilePicture src={profile}></ProfilePicture>
      <Content name={name} content={content} />
      <LikeBtn />
    </div>
  );
}

export default memo(Reply);
