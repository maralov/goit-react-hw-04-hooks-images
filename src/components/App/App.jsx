import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

import s from './App.module.css';
import { fetchMovies } from '../utils/apiService';

export default function App() {
  const [image, setImage] = useState([]);
  const [searchImage, setSearchImage] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState('');

  useEffect(() => {
    if (searchImage === '') return;

    setLoading(true);

    fetchMovies(searchImage, page)
      .then(data => {
        if (!data.total) setError(true);

        setError(false);
        setImage(prevImages => [...prevImages, ...data.hits]);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [searchImage, page]);

  const onClickLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const modalShow = index => {
    setShowModal(true);
    setLargeImage(image[index].largeImageURL);
  };

  const modalHide = () => {
    setShowModal(false);
  };

  const onFormSubmit = img => {
    setSearchImage(img);
    setPage(1);
    setImage([]);
    setError(false);
  };

  const notify = () => {
    toast.error('🦄 Wow so easy!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className={s.root}>
      <Searchbar onSubmit={onFormSubmit} />
      <ImageGallery searchQuery={image} onClick={modalShow} />

      {image.length !== 0 && (
        <Button text="Load more" onClick={onClickLoadMore} />
      )}

      {error && notify()}
      {loading && <Loader />}
      {showModal && <Modal onClose={modalHide} img={largeImage} />}

      <ToastContainer
        position="top-right"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
    </div>
  );
}
