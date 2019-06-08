import './style.scss';
import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import classnames from 'classnames';
import LinearProgress from '../LinearProgress';
import CloseSVG from '../../resources/svg/close.svg';
import LeftArrowSVG from '../../resources/svg/left-arrow.svg';
import RightArrowSVG from '../../resources/svg/right-arrow.svg';

const INITIAL_STATE = {
  currentIndex: 0,
  loaded: false,
};

interface Slides {
  title: string;
  url: string;
  displayName: string;
}

interface ModalProps {
  show?: boolean;
  index?: number;
  totalCount?: number;
  slides: Slides[];
  offset: number;
  onClose(): void;
}

function Modal({
  show = false,
  index = 0,
  totalCount = 0,
  slides,
  offset,
  onClose,
}: ModalProps) {
  const [state, setModalState] = useState(INITIAL_STATE);
  const currentSlide =
    slides.length > 0 ? slides[state.currentIndex] : undefined;
  const isLeftArrowDisabled = state.currentIndex === 0;
  const isRightArrowDisabled = state.currentIndex === slides.length - 1;
  const cls = classnames('modal-dialog', {
    'back-drop': show,
  });

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);
    return () => removeListener();
  });

  useEffect(() => {
    setModalState({ ...state, currentIndex: index });
  }, [index, state]);

  // useEffect(() => {
  //   if (props.slides.length - state.currentIndex <= 10)
  //     props.fetch(offset);
  // }, [state, state.currentIndex]);

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
      handlePreviousSlide();
    }

    if (e.keyCode === 39) {
      //right-arrow
      handleNextSlide();
    }
  };

  const handleImageLoad = () => {
    setModalState({ ...state, loaded: true });
  };

  const handlePreviousSlide = () => {
    setModalState({
      ...state,
      currentIndex: (state.currentIndex - 1) % slides.length,
      loaded: false,
    });
  };

  const handleNextSlide = () => {
    setModalState({
      ...state,
      currentIndex: (state.currentIndex + 1) % slides.length,
      loaded: false,
    });
  };

  return (
    <div
      className={cls}
      style={{
        transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? 1 : 0,
      }}
    >
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          <SVG src={CloseSVG} />
        </button>
        <LinearProgress loading={!state.loaded} />
        {currentSlide && (
          <div>
            {currentSlide.displayName && (
              <div className="modal-display-name-container">
                <div className="modal-display-name">
                  {currentSlide.displayName}
                </div>
              </div>
            )}
            <img
              className="modal-img"
              src={currentSlide.url}
              alt="Modal img"
              onLoad={handleImageLoad}
            />
            <div className="modal-info-container">
              <div className="modal-title">{currentSlide.title}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(Modal);
