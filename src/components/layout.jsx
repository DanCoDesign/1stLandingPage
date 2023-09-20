
import { Inter } from 'next/font/google';
import Container from "./Container";
import Navbar from "./navbar";
import Footer from "./footer";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sliht - Next.js Template for Modern Web Development | DanCoDesign',
  description: 'Explore the power of Sliht, a Next.js template designed by DanCoDesign for creating modern web applications. Start building your projects with ease and efficiency.',
}

export default function RootLayout({ children }) {
  return (


        <main>
          <Container>
            <Navbar />
          </Container>
          {children}
          <Footer />
        </main>


  )
}
