import type { ReactNode } from 'react';
import { MobileStickyCta } from '../MobileStickyCta';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen pb-20 sm:pb-0">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <MobileStickyCta />
    </div>
  );
}
