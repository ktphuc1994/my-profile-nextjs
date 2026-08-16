import type { Metadata } from 'next';
import Layout from '@/core/HOC/Layout';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Khuc Thien Phuc Profile',
  description: 'A profile created by Khuc Thien Phuc with Next.js framework',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
