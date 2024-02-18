'use client';

import Head from 'next/head';
import Navbar from '../components/Navbar';
import { SectionHero } from '@/components/SectionHero';

export default function Home() {
  return (
    <main className="p-4">
      <Navbar />
      <SectionHero />
    </main>
  );
}
