import Image from 'next/image';
import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export function SectionHero() {
  const images = [
    '/../model.jpg',
    '/../camila.jpg',
    '/../francine.jpg',
    '/../julia.jpg',
    '/../sophia.jpg',
    '/../thamiris.jpg',
  ];

  return (
    <section className="h-[704px] w-full bg-white bg-cover bg-center bg-no-repeat">
      <div className="mx-auto flex w-full max-w-[1246px] items-center justify-between px-[15px]">
        <div className="p-5">
          <h1 className="text-7xl font-bold text-black">Professional</h1>
          <h1 className="text-7xl font-bold text-blue-500">Models</h1>
          <h1 className="text-7xl font-bold text-black">For Your Needs</h1>
        </div>
        <Carousel
          className="w-max max-w-md pt-10"
          plugins={[Autoplay({ delay: 4000 })]}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent>
                    <Image src={image} alt="model" width={480} height={620} />
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
