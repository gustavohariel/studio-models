import {
  InstagramLogoIcon,
  PlusIcon,
  TwitterLogoIcon,
  ArrowTopRightIcon,
} from '@radix-ui/react-icons';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';

export function SectionOutro() {
  return (
    <section className="p-3">
      <div className="flex items-center justify-center">
        <h1 className="mx-1.5 w-max rounded-md bg-[#141414] p-1 text-7xl font-bold text-white">
          Connect
        </h1>
        <h1 className="text-7xl font-bold text-black">With Us</h1>
      </div>
      <div className="flex items-center justify-center p-5">
        <p className="flex justify-between">
          <InstagramLogoIcon className="mt-1" />
          &nbsp;Instagram
        </p>
        <PlusIcon className="mx-5" />
        <p className="flex justify-between">
          <TwitterLogoIcon className="mt-1" />
          &nbsp;Twitter
        </p>
      </div>
      <div className="relative">
        <Image
          src="/models/francine.jpg"
          alt="bg"
          width={600}
          height={600}
          className="rounded mx-auto"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Button className="rounded-full bg-green-500 p-3 text-2xl font-bold text-white transition-transform duration-300 ease-in-out hover:scale-110">
            Contact Us
            <ArrowTopRightIcon className=" ml-2 h-4 w-4 rounded-full" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default SectionOutro;
