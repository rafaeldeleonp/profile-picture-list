import './style.scss';
import React, { memo, useState } from 'react';
import classnames from 'classnames';
import profile1 from '../../resources/images/profile1.png';
import profile2 from '../../resources/images/profile2.png';
import profile3 from '../../resources/images/profile3.png';

const IMGS: any = {
  'profile1': profile1,
  'profile2': profile2,
  'profile3': profile3,
};

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

  return <img className={imgCls} src={IMGS[src]!} alt="Profile" onLoad={handleLoad} />;
}

export default memo(ProfilePicture);
