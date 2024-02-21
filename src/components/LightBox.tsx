import Image from 'next/image';
import React from 'react';
import ModelsCategories from '../components/ModelsCategories';

interface ImageProps {
  src: string;
  alt: string;
  title: string;
  details: {
    age: string;
    height: string;
    moreButton: string;
  };
}

const images: ImageProps[] = [
  {
    src: '/models/francine.jpg',
    alt: 'Francine',
    title: 'Francine',
    details: {
      age: '25',
      height: '1.75',
      moreButton: 'Fashion Female',
    },
  },
  {
    src: '/models/lucas.jpg',
    alt: 'Lucas',
    title: 'Lucas',
    details: {
      age: '25',
      height: '1.75',
      moreButton: 'Fashion Male',
    },
  },
  {
    src: '/models/tainara.jpg',
    alt: 'Tainara',
    title: 'Tainara',
    details: {
      age: '25',
      height: '1.75',
      moreButton: 'Fashion Curve',
    },
  },
  {
    src: '/models/camila.jpg',
    alt: 'Camila',
    title: 'Camila',
    details: {
      age: '25',
      height: '1.75',
      moreButton: 'Cast Female',
    },
  },
  {
    src: '/models/augusto.jpg',
    alt: 'Augusto',
    title: 'Augusto',
    details: {
      age: '25',
      height: '1.75',
      moreButton: 'Cast Male',
    },
  },
  {
    src: '/models/julia.jpg',
    alt: 'Julia',
    title: 'Julia',
    details: {
      age: '25',
      height: '1.75',
      moreButton: 'Cast Kids',
    },
  },
];

const LightBox: React.FC = () => {
  return (
    <section className="flex min-h-screen w-full items-start justify-center py-10">
      <div className="grid grid-cols-3 gap-6 pt-12">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded transition-transform duration-500 ease-in-out hover:scale-110"
          >
            <Image src={img.src} alt={img.alt} width={300} height={300} />
            <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-70 opacity-0 transition-opacity hover:opacity-100">
              <ModelsCategories title={img.title} details={img.details} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LightBox;
