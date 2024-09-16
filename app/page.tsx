// app/page.tsx
"use client";  // This is necessary for client-side features like useRouter

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/Welcomepage');
  }, [router]);

  return null;  // Optionally return a loading spinner or nothing
}
