'use client';
import { useRef, useState, useEffect } from 'react';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

type Props = {
  images: string[];
  autoplay: boolean;
};

const CarouselModel: React.FC<Props> = ({ images, autoplay }: Props) => {
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
    <Carousel
      plugins={[autoplayRef.current]}
      className="max-w-cover w-4/12 pt-12"
      onMouseOver={() => setAutoplayActive(false)}
      onMouseOut={() => setAutoplayActive(true)}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Card className="pt-5">
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
  );
};

export default CarouselModel;
