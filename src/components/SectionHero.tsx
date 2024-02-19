import { useState, useEffect, useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';

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
          <div className="pt-6">
            <p className="max-w-md text-sm text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic
            </p>
          </div>
          <div className="pt-6">
            <Button className="rounded-full bg-[#141414] p-3 text-2xl font-bold text-white">
              Explore Talent
              <ArrowTopRightIcon className=" ml-2 h-4 w-4 rounded-full" />
            </Button>
          </div>
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
