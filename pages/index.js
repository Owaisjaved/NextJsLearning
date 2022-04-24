import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
    <Head>
    <title>Ninja List | Home</title>
    <meta name="keywords" content="ninjas" />
    </Head>
    <div>
      <h1 className={styles.title}> Hello World</h1>
      <p className={styles.text}>
        Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
        Lorem Lorem Lorem Lorem
      </p>
      <p className={styles.text}>
        Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
        Lorem Lorem Lorem Lorem
      </p>
      <p className={styles.text}>
        Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
        Lorem Lorem Lorem Lorem
      </p>
      <Link href="/ninja" >
        <a className={styles.btn}>Ninja Listing</a>
      </Link>
    </div>
    </>
  );
}
