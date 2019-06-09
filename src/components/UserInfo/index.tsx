import './style.scss';
import React from 'react';

interface UserInfoProps {
  picture: string;
  name: string;
  username: string;
  posts: number;
  followers: number;
  description?: string;
}

function UserInfo({
  picture,
  name,
  username,
  posts,
  followers,
  description = '',
}: UserInfoProps) {
  return (
    <div className="user-profile">
      <div className="profile-img-container">
        <img className="profile-img" src={picture} alt="Profile" />
      </div>
      <div className="user-info">
        <div className="username-container">
          <div className="name">{name}</div>
          <div className="username">{username}</div>
        </div>
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
        <div className="description-container">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
