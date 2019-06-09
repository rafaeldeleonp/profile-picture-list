import './style.scss';
import React, { useState } from 'react';
import classnames from 'classnames';

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
  const [isLoading, setLoading] = useState(true);
  const imgCls = classnames('profile-img', {
    'is-loading': isLoading,
  });

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div className="user-profile">
      <div className="profile-img-container">
        <img
          className={imgCls}
          src={picture}
          alt="Profile"
          onLoad={handleLoad}
        />
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
