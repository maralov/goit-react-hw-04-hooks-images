import React, { useState } from 'react';
import { toast } from 'react-toastify';

import s from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [image, setImage] = useState('');

  const handleChange = ({ target }) => {
    const value = target.value.toLowerCase();
    setImage(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (image.trim() === '') {
      toast.warning('Tap some word for searching!', {
        position: 'bottom-center',
        autoClose: 4000,
      });
      return;
    }
    onSubmit(image);
    clearForm();
  };

  const clearForm = () => {
    setImage('');
  };

  return (
    <header className={s.root}>
      <form className={s.form} onSubmit={handleSubmit}>
        <button type="submit" className={s.button}>
          <span className={s.buttonLabel}>Search</span>
        </button>

        <input
          value={image}
          onChange={handleChange}
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
