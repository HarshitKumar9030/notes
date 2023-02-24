import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Available from '@/components/Notes'

export default function Home() {
  return (
    <>
      <Head>
        <title>Notes - Harshit Kumar</title>
        <meta name="description" content="A simple notes taking app created with nextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <main className="h-full overflow-y-hidden overflow-x-hidden w-full bg-zinc-900">
        <Navbar />
        <Available />
     </main>
    </>
  )
}
