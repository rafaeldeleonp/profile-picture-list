import './style.scss';
import React, { memo } from 'react';
import ProfilePicture from '../ProfilePicture';

interface UserInfoProps {
  name: string;
  username: string;
  posts?: number;
  followers?: number;
  description?: string;
  hideStadistics?: boolean;
}

function UserInfo({
  name,
  username,
  posts = 0,
  followers = 0,
  description = '',
  hideStadistics = false,
}: UserInfoProps) {
  return (
    <div className="user-profile">
      <div className="profile-img-container">
        <ProfilePicture src="profile1" />
      </div>
      <div className="user-info">
        <div className="username-container">
          <div className="name">{name}</div>
          <div className="username">{username}</div>
        </div>
        {!hideStadistics && (
          <div className="stadistics-container">
            <div className="posts-container">
              <span className="number">{posts}</span>
              <span className="label">posts</span>
            </div>
            <div className="followers-container">
              <span className="number">{followers}</span>
              <span className="label">followers</span>
            </div>
          </div>
        )}
        <div className="description-container">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default memo(UserInfo);
