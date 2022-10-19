import Link from 'next/link';

export default function Header() {
  return (
    <div style={{ backgroundColor: 'green', padding: '20px' }}>
      <h2>This is Header</h2>{' '}
      <Link href={'/'}>
        <a>Main</a>
      </Link>{' '}
      <Link href={'/reviews'}>
        <a>Reviews</a>
      </Link>
      <hr />
    </div>
  );
}
