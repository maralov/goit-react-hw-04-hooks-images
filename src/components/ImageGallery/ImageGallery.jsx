import React from 'react';

import ImageGalleryItem from 'components/ImageGalleryItem';

import s from './ImageGallery.module.css';

export default function ImageGallery({ searchQuery, onClick }) {
  return (
    <ul className={s.root}>
      {searchQuery &&
        searchQuery.map((img, i) => (
          <ImageGalleryItem key={img.id} img={img} onClick={() => onClick(i)} />
        ))}
    </ul>
  );
}
