import React, { useEffect, useCallback } from 'react';
import s from './Modal.module.css';

export default function Modal({ onClose, img }) {
  const onImageClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const onEscapeClick = useCallback(
    e => {
      if (e.code === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    window.addEventListener('keydown', onEscapeClick);

    return () => {
      window.removeEventListener('keydown', onEscapeClick);
    };
  }, [onEscapeClick]);

  return (
    <div className={s.overlay} onClick={onImageClick}>
      <div className={s.modal}>
        <img src={img} alt="" />
      </div>
    </div>
  );
}
