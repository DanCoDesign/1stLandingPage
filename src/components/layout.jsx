
import Container from "./Container";
import Navbar from "./navbar";
import Footer from "./footer";

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
