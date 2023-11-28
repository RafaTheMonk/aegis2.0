import Header from "./components/Header";
import Footer from './components/Footer/index';
import Banner from "./components/Banner";
import Container from "./components/Container";
import Card from './components/Card/index';
import videos from "./json/iniciante.json"
import videosIntermediario from "./json/intermediario.json"
import videosAvancados from "./json/avancado.json"

function App() {
  return (
    <>
      <Header />
      <Banner image="favoritos" />
      <Container>
        <h2>Nível Iniciante:</h2>
        <section className="cards">
        { videos.map((video) => <Card id={video.id} key={video.id}/>) }
        </section>
        <h2>Nível Intermediário:</h2>
        <section className="cards">
        { videosIntermediario.map((video) =><Card id={video.id} key={video.id}/>) }
        </section>
        <h2>Nível Avançado:</h2>
        <section className="cards">
        { videosAvancados.map((video) =><Card id={video.id} key={video.id}/>) }
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default App;