'use client';
import { useEffect } from 'react';

export default function NavbarWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const navbar = document.querySelector('nav');
    if (navbar) {
      const height = navbar.getBoundingClientRect().height;
      document.documentElement.style.setProperty('--navbar-height', `${height}px`);
    }

    // Recalculate on resize (for responsive changes)
    const handleResize = () => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        const height = navbar.getBoundingClientRect().height;
        document.documentElement.style.setProperty('--navbar-height', `${height}px`);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <>{children}</>;
}
