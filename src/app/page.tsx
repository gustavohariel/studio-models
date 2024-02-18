import React from 'react';
import Image from 'next/image';
import Carousel from '../components/Carousel';

const images = [
  { src: require('../public/francine2.jpg'), alt: 'Francine' },
  { src: require('../public/thamiris.jpg'), alt: 'Thamiris' },
  { src: require('../public/sophia.jpg'), alt: 'Sophia' },
  { src: require('../public/julia3.jpg'), alt: 'Sophia' },
];

export default function Home() {
  return (
    <main className="mx-auto flex flex-wrap justify-center bg-[#eeeeee] text-2xl">
      {/* HEADER */}
      <div className="mx-auto pt-20">
        <div className="mx-10 text-left font-bold text-[#000000]">
          <h1 className="mx-10 pt-8 text-6xl">Studio Models</h1>
          <p className="mx-10 w-2/6 text-lg">
            Somos uma agência de modelos e elenco, líder em gerenciamento de
            carreira, com foco em moda e publicidade, atuamos no mercado
            nacional e internacional, prestando assessoria em apontamentos,
            tratando desde a seleção até as condições de trabalho e postura
            ética entre seus agenciados.
          </p>
        </div>
      </div>
      {/* CONTENT */}
      <div className="mx-auto w-screen bg-[#eeeeee] pt-20">
        <div className="mx-auto w-3/5">
          <Carousel images={images} />
        </div>
      </div>
    </main>
  );
}
