import './style.scss';
import React, { memo, useState, useEffect } from 'react';
import SVG from 'react-inlinesvg';
import classnames from 'classnames';
import Comments from '../Comments';
import LoaderCircular from '../Loader/Circular';
import CloseSVG from '../../resources/svg/close.svg';
import ThreeDotsLogo from '../../resources/svg/logo-three-dots.svg';
import LeftArrowSVG from '../../resources/svg/left-arrow.svg';
import RightArrowSVG from '../../resources/svg/right-arrow.svg';
import { CommentProps } from '../../components/Comments/comments-definitions';

interface Data {
  id: string;
  url: string;
  comments?: CommentProps[];
}

interface ModalProps {
  show?: boolean;
  data: Data;
  disableLeftArrow: boolean;
  disableRightArrow: boolean;
  handlePrevious(): void;
  handleNext(): void;
  onClose(): void;
}

interface LoadingState {
  data: boolean;
  image: boolean;
}

function Modal({
  show = false,
  data,
  disableLeftArrow,
  disableRightArrow,
  handlePrevious,
  handleNext,
  onClose,
}: ModalProps) {
  const [stateData, setData] = useState({ ...data, comments: [] });
  const [loading, setLoading] = useState<LoadingState>({
    data: true,
    image: true,
  });
  const loadingStatus = loading.data && loading.image;
  const cls = classnames('modal-dialog', {
    'back-drop': show,
  });

  useEffect(() => {
    setLoading({
      data: true,
      image: true,
    });

    setTimeout(function() {
      fetch('/data/comments.json')
        .then(res => res.json())
        .then(data => {
          const randomIndex = Math.floor(Math.random() * 3);

          console.log('RANDOM INDEX', randomIndex);

          setData({
            ...stateData,
            comments: data[randomIndex].comments,
          });

          setLoading({
            data: false,
            image: loading.image,
          });
        });
    }, Math.floor(Math.random() * 2000));
  }, [data.id]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    return () => removeListener();
  });

  const removeListener = () => {
    window.removeEventListener('keyup', handleKeyUp);
  };

  const handleImageLoad = () => {
    setLoading({
      data: loading.data,
      image: false,
    });
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    e.preventDefault();

    if (e.keyCode === 27) {
      //escape
      onClose();
      removeListener();
    }

    if (e.keyCode === 37) {
      // left-arrow
      handlePrevious();
    }

    if (e.keyCode === 39) {
      //right-arrow
      handleNext();
    }
  };

  return (
    <div
      className={cls}
      style={{
        transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? 1 : 0,
      }}
    >
      {!disableLeftArrow && (
        <button className="left-btn" onClick={handlePrevious}>
          <SVG src={LeftArrowSVG} />
        </button>
      )}
      {
        <LoaderCircular
          loading={loadingStatus}
          color="white"
          width="50"
          height="50"
        />
      }
      {!loadingStatus && (
        <div className="modal-content">
          <button className="close-btn" onClick={onClose}>
            <SVG src={CloseSVG} />
          </button>
          <div className="modal-content-body">
            <img
              className="modal-img"
              src={data.url}
              alt="Modal foto"
              onLoad={handleImageLoad}
            />
            <Comments data={stateData.comments} />
          </div>
          <div className="modal-content-footer">
            <SVG src={ThreeDotsLogo} />
          </div>
        </div>
      )}
      {!disableRightArrow && (
        <button className="right-btn" onClick={handleNext}>
          <SVG src={RightArrowSVG} />
        </button>
      )}
    </div>
  );
}

export default memo(Modal);
