
import Layout from '../layout'
import Container from "../components/Container";
import Hero from "../components/homePage/hero";
import BenefitSectionOne from "../components/homePage/benefitSectionOne";
import BenefitSectionTwo from "../components/homePage/benefitSectionTwo";
import SuccessStory from "../components/homePage/successStory";
import ProcessSteps from "../components/homePage/ProcessSteps";
import CTAction from "../components/homePage/ctaction";


export default function Page() {
  return (
    <>

      <Container>
        <Hero />
      </Container>
      <BenefitSectionOne />
      <Container>
        <BenefitSectionTwo />

        <SuccessStory />
        <ProcessSteps />

      </Container >

      <CTAction />
    </>
  );
}
Page.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}