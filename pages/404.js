import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, []);

  return (
    <div>
      <h1>Ups...</h1>
      <h2>404 - Page Not Found!</h2>
      <p>
        Go to the <Link href={'/'}>Main Page</Link> in 5 seconds
      </p>
    </div>
  );
}
