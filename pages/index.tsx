import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center h-screen">
      <Head>
        <title>Pomodoro</title>
        <meta name="description" content="Simple Pomodoro Web App using Next.js" />
        <link rel="icon" href="/tomato.png" />
      </Head>

      <main className="flex flex-col justify-center items-center">
        <h1 className="m-0 text-6xl text-center">
          POMODORO
        </h1>
      </main>
    </div>
  )
}

export default Home
