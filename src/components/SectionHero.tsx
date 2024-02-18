import Image from 'next/image';

export function SectionHero() {
  return (
    <section className="h-[704px] w-full bg-white bg-cover bg-center bg-no-repeat">
      <div className="mx-auto flex w-full max-w-[1246px] items-center justify-between px-[15px]">
        <div className="p-5">
          <h1 className="text-7xl font-bold text-black">Professional</h1>
          <h1 className="text-7xl font-bold text-blue-500">Models</h1>
          <h1 className="text-7xl font-bold text-black">For Your Needs</h1>
        </div>
        <div>
          <Image className="pt-2" src="/model.jpg" width={450} height={300} alt="hero" />
        </div>
      </div>
    </section>
  );
}
