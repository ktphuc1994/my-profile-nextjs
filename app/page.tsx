import type { Metadata } from 'next';
import HomePage from '@/core/components/Home/HomePage';

export const metadata: Metadata = {
  title: 'My Profile | Khuc Thien Phuc',
  description: 'A simple profile coded with Next.js',
};

export default function Home() {
  return <HomePage />;
}
