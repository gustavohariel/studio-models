import React from 'react';
import Image from 'next/image';

interface CarouselProps {
  images: { src: StaticImageData; alt: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <div className="carousel rounded-box">
      {images.map((image, index) => (
        <div key={index} className="carousel-start carousel-item w-64">
          <Image src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
