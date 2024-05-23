import Head from "next/head";
import Container from "./components/Container";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>Sliht - Free Nextjs & TailwindCSS Landing Page Template</title>
        <meta
          name="description"
          content="Sliht is a free multipurpose landing page template built with next.js & Tailwind CSS"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <main className={inter.className}>
        <Container>
          <Navbar />
        </Container>
        {children}
        <Footer />
      </main>
    </>

  )
}
