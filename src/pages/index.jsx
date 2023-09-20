
import Layout from '../components/layout'
import Container from "../components/container";
import Hero from "../components/hero";
import BenefitSectionOne from "../components/benefitSectionOne";
import BenefitSectionTwo from "../components/benefitSectionTwo";
import SuccessStory from "../components/successStory";
import ProcessSteps from "../components/ProcessSteps";
import CTAction from "../components/ctaction";


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