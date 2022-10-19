import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Main Page</h1>
      <Image
        src="/fatburger.png"
        alt="fatburger"
        width="300px"
        height="250px"
      />
    </div>
  );
}
