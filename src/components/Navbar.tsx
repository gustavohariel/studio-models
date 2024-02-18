import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="max-w-screen navbar justify-center space-x-2 bg-[#eeeeee] font-bold text-[#000000]">
      <div className="link-hover link flex-none">
        <button className="link-hover link text-sm">
          <Link href="/">home</Link>
        </button>
      </div>
      <div className="link-hover link flex-none">
        <button className="text-sm">
          <Link href="/">about</Link>
        </button>
      </div>
      <div className="link-hover link flex-none">
        <button className="text-sm">
          <Link href="/">cast</Link>
        </button>
      </div>
      <div className="link-hover link flex-none">
        <button className="text-sm">
          <Link href="/">models</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
