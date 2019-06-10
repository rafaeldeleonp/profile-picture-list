import './style.scss';
import React, { memo, useState, useEffect } from 'react';
import SVG from 'react-inlinesvg';
import classnames from 'classnames';
import Comments from '../Comments';
import CloseSVG from '../../resources/svg/close.svg';
import ThreeDotsLogo from '../../resources/svg/logo-three-dots.svg';
import LeftArrowSVG from '../../resources/svg/left-arrow.svg';
import RightArrowSVG from '../../resources/svg/right-arrow.svg';

const INITIAL_STATE = {
  currentIndex: 0,
  loaded: false,
};

interface Data {
  id: string;
  url: string;
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

function Modal({
  show = false,
  data,
  disableLeftArrow,
  disableRightArrow,
  handlePrevious,
  handleNext,
  onClose,
}: ModalProps) {
  const [state, setModalState] = useState(INITIAL_STATE);
  const cls = classnames('modal-dialog', {
    'back-drop': show,
  });

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);
    return () => removeListener();
  });

  const removeListener = () => {
    window.removeEventListener('keyup', handleKeyUp);
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

  const handleImageLoad = () => {
    setModalState({ ...state, loaded: true });
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
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          <SVG src={CloseSVG} />
        </button>
        <div className="modal-content-body">
          <img className="modal-img" src={data.url} alt="Modal foto" />
          <Comments />
        </div>
        <div className="modal-content-footer">
          <SVG src={ThreeDotsLogo} />
        </div>
      </div>
      {!disableRightArrow && (
        <button className="right-btn" onClick={handleNext}>
          <SVG src={RightArrowSVG} />
        </button>
      )}
    </div>
  );
}

export default memo(Modal);
