import React from 'react';
import SpinnerLoader from 'react-loader-spinner';
import s from './Loader.module.css';

export default function Loader() {
  return (
    <div className={s.root}>
      <SpinnerLoader
        type="Bars"
        color="#ffffff"
        height={80}
        width={80}
        // timeout={3000}
      />
    </div>
  );
}
