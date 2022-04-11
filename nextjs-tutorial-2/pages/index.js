import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HOME | 코딩앙마</title>
      </Head>
      <ul>
        <li>1.기본내용</li>
        <li>2.기본내용</li>
        <li>3.기본내용</li>
      </ul>
      create-ndfext-app
    </div>
  );
}
