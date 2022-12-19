import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Image from 'next/image'
import Link from 'next/link'
import Banner from '../componentes/banner.js'
import Destaque from '../componentes/destaque.js'

export default function Demo() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Apioneira</title>
      </Head>
      <main className={styles.main}>

      <Banner />

      <Destaque />
      
       </main>
    </div>
  )
}