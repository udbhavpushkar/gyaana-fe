import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Gyaana</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to Gyaana
        </h1>
        </main>
    </div>
  )
}
