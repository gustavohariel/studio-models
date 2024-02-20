'use client';

import Head from 'next/head';
import Navbar from '../components/Navbar';
import { SectionHero } from '@/components/SectionHero';
import { LogoSlider } from '../components/LogoSlider';
import LightBox from '@/components/LightBox';

export default function Home() {
  return (
    <main className="p-4">
      <Navbar />
      <SectionHero />
      <LightBox />
    </main>
  );
}
