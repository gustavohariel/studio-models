import Image from 'next/image';

export default function LightBox() {
  const images = [
    '/models/lucas.jpg',
    '/models/camila.jpg',
    '/models/cibele.jpg',
    '/models/anderson.jpg',
    '/models/augusto.jpg',
    '/models/tainara.jpg',
  ];

  return (
    <section className="py-1-0 flex min-h-screen w-full items-start justify-center">
      <div className="grid grid-cols-3 pt-12">
        {images.map((img, index) => (
          <Image
            className="rounded transition-transform duration-100 ease-in-out hover:scale-110"
            key={index}
            src={img}
            alt="model"
            width={300}
            height={300}
          />
        ))}
      </div>
    </section>
  );
}
