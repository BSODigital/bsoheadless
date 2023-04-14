import { useState } from 'react';
import Link from 'next/link';
import { classNames as cn } from 'utils';

import styles from './Gallery.module.scss';

export default function Gallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.gallery}>
      {images.map((image) => (
        <img key={image} src={image} alt="gallery image" onClick={() => handleClick(image)}/>
      ))}
      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <img src={selectedImage} alt="selected image" />
        </div>
      )}
    </div>
  );
};