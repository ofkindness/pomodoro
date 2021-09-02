import type { NextPage } from 'next';
import Head from 'next/head';

import { Counter } from '../components/Counter';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center h-screen bg-cyan-500">
      <Head>
        <title>Pomodoro</title>
        <meta
          name="description"
          content="Simple Pomodoro Web App using Next.js"
        />
        <link rel="icon" href="/tomato.png" />
      </Head>

      <main className="flex flex-col justify-center items-center">
        <div className="flex items-center h-screen w-full bg-teal-lighter">
          <div className="w-full p-8 m-4">
            <h1 className="font-serif w-full m-0 mb-10 text-6xl uppercase text-center text-white">
              Pomodoro
            </h1>
            <Counter />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
