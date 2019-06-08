import React, { memo, useState } from 'react';
import Modal from '../../components/Modal';

const SLIDES = [
  {
    title: 'title 1',
    url: '/public/images/ferrari.jpeg',
    displayName: 'display name 1',
  },
  {
    title: 'title 2',
    url: '/public/images/ferrari.jpeg',
    displayName: 'display name 2',
  },
  {
    title: 'title 3',
    url: '/public/images/ferrari.jpeg',
    displayName: 'display name 3',
  },
  {
    title: 'title 4',
    url: '/public/images/ferrari.jpeg',
    displayName: 'display name 4',
  },
  {
    title: 'title 5',
    url: '/public/images/ferrari.jpeg',
    displayName: 'display name 5',
  },
];

function Home() {
  const [showModal, setModalState] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setModalState(true);
  };

  const handleClose = () => {
    setModalState(false);
  };

  return (
    <React.Fragment>
      <img
        src="/images/ferrari.jpeg"
        srcSet="/images/ferrari-300.jpg 1.5x"
        alt="No hay foto"
        width={294}
        height={294}
        onClick={handleClick}
      />
      <Modal
        show={showModal}
        slides={SLIDES}
        offset={15}
        onClose={handleClose}
      />
    </React.Fragment>
  );
}

export default memo(Home);
