import { Button } from '@/components/ui/button';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import CarouselModel from './CarouselModel';
import LogoSlider from './LogoSlider';

export function SectionHero() {
  const images = [
    '/models/lucas.jpg',
    '/models/camila.jpg',
    '/models/cibele.jpg',
    '/models/anderson.jpg',
    '/models/augusto.jpg',
    '/models/tainara.jpg',
    '/models/elianara.jpg',
    '/models/francine.jpg',
    '/models/bruno.jpg',
    '/models/jeferson.jpg',
    '/models/thamiris.jpg',
    '/models/giovanna.jpg',
    '/models/julia.jpg',
    '/models/paulo.jpg',
    '/models/yasmin.jpg',
    '/models/nicole.jpg',
    '/models/sophia.jpg',
    '/models/raul.jpg',
    '/models/rodrigo.jpg',
  ];

  return (
    <section className="h-[704px] w-full bg-white bg-cover bg-center bg-no-repeat">
      <div className="mx-auto flex w-full  max-w-[1246px] flex-wrap items-center justify-between px-[15px]">
        <div className="p-5">
          <h1 className="w-max p-1 text-7xl font-bold text-black">
            Professional
          </h1>
          <h1 className="mx-1.5 w-max rounded-md bg-[#141414] p-1 text-7xl font-bold text-white">
            Models
          </h1>
          <h1 className="text-7xl font-bold text-black">For Your Needs</h1>
          <div className="pt-6">
            <p className="max-w-lg text-base text-[#141414]">
              We are a modeling and casting agency, a leader in career
              management, with a focus on fashion and advertising, we operate in
              the national and international market, providing advice on
              appointments, dealing with everything from selection to working
              conditions and ethical stance among its agents.
            </p>
          </div>
          <div className="pt-6">
            <Button className="rounded-full bg-[#141414] p-3 text-2xl font-bold text-white hover:bg-slate-700">
              Explore Talent
              <ArrowTopRightIcon className=" ml-2 h-4 w-4 rounded-full" />
            </Button>
          </div>
        </div>
        <CarouselModel images={images} autoplay={true} />
        <LogoSlider />
      </div>
    </section>
  );
}
