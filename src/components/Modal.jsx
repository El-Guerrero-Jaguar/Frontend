import React from 'react';

import '../assets/styles/components/Modal.scss';

import IconClose from '../assets/statics/close.svg';

const Modal = ({ children, handleModal }) => (
  <>
    <div className="Modal-overlay" />
    <div className="Modal-container">
      <div className="Modal-content">
        <span className="Modal-close">
          <button type="button" onClick={handleModal}>
            <img src={IconClose} alt="Close modal" />
          </button>
        </span>
        {children}
      </div>
    </div>
  </>
);

export default Modal;
