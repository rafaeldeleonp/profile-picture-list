import './style.scss';
import React, { useState } from 'react';
import classnames from 'classnames';

interface ProfilePictureProps {
  src: string;
}

function ProfilePicture({ src }: ProfilePictureProps) {
  const [isLoading, setLoading] = useState<boolean>(true);
  const imgCls = classnames('profile-img', {
    'is-loading': isLoading,
  });

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <img
      className={imgCls}
      src="/images/profile.png"
      alt="Profile"
      onLoad={handleLoad}
    />
  );
}

export default ProfilePicture;
