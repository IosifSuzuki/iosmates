import { useState } from 'react';

import './ImageCarousel.css';

export default function ImageCarousel(props) {
  const images = props.images;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <div className='carousel flex justify-center items-center'>
      <button className='prev' onClick={prevSlide}>
        ‹
      </button>
      <div className='carousel-image'>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button className='next' onClick={nextSlide}>
        ›
      </button>
    </div>
  );
}
