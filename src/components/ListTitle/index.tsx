import './style.scss';
import React, { memo } from 'react';
import SVG from 'react-inlinesvg';
import LogoThreeDots from '../../resources/svg/logo-three-dots.svg';

interface ListTitleProps {
  title: string;
}

function ListTitle({ title }: ListTitleProps) {
  return (
    <div className="list-title-container">
      <div className="title-header-content">
        <SVG className="three-dots-logo" src={LogoThreeDots} />
        <h1>{title}</h1>
        <span className="dot" style={{ backgroundColor: '#000000' }} />
      </div>
    </div>
  );
}

export default memo(ListTitle);
