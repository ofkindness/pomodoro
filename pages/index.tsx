import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pomodoro</title>
        <meta name="description" content="Simple Pomodoro Web App using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          POMODORO
        </h1>

        <div className={styles.list}>
        </div>
      </main>
    </div>
  )
}

export default Home
