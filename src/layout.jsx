
import Container from "./components/Container";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

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
