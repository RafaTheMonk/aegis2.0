import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import Container from "./../../components/Container/index";
import Contact from "../../components/Contact";
import CardsAtividade from "../../components/CardsAtividade/index";
import AboutUs from "./../../components/AboutUs/index";
import Services from "../../components/Services";
import HomeBanner from "../../components/HomeBanner";

function Entrada() {
  return (
    <>
      <Header />
      <Container>
        <HomeBanner />
        <Services></Services>
        <AboutUs></AboutUs>
        <CardsAtividade></CardsAtividade>
        <Contact></Contact>
      </Container>
      <Footer />
    </>
  );
}

export default Entrada;
