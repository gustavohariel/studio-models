import { useState, useEffect, useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export function SectionHero() {
  const images = [
    '/../lucas.jpg',
    '/../camila.jpg',
    '/../cibele.jpg',
    '/../anderson.jpg',
    '/../augusto.jpg',
    '/../tainara.jpg',
    '/../elianara.jpg',
    '/../francine.jpg',
    '/../bruno.jpg',
    '/../jeferson.jpg',
    '/../thamiris.jpg',
    '/../giovanna.jpg',
    '/../julia.jpg',
    '/../paulo.jpg',
    '/../yasmin.jpg',
    '/../nicole.jpg',
    '/../sophia.jpg',
    '/../raul.jpg',
    '/../rodrigo.jpg',
  ];

  const [autoplayActive, setAutoplayActive] = useState(true);
  const autoplayRef = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  );

  useEffect(() => {
    if (autoplayActive) {
      const timeoutId = setTimeout(() => {
        autoplayRef.current.play();
      }, 0);

      return () => clearTimeout(timeoutId);
    } else {
      autoplayRef.current.stop();
    }
  }, [autoplayActive]);

  return (
    <section className="h-[704px] w-full bg-white bg-cover bg-center bg-no-repeat">
      <div className="mx-auto flex w-full max-w-[1246px] items-center justify-between px-[15px]">
        <div className="p-5">
          <h1 className="w-max p-1 text-7xl font-bold text-black">
            Professional
          </h1>
          <h1 className="mx-1.5 w-max rounded-md bg-[#141414] p-1 text-7xl font-bold text-white">
            Models
          </h1>
          <h1 className="text-7xl font-bold text-black">For Your Needs</h1>
        </div>
        <Carousel
          plugins={[autoplayRef.current]}
          className="max-w-cover w-4/12 pt-12"
          onMouseOver={() => setAutoplayActive(false)}
          onMouseOut={() => setAutoplayActive(true)}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent>
                    <Image
                      src={image}
                      alt="hero"
                      width={480}
                      height={480}
                      className="md:rounded-lg"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
