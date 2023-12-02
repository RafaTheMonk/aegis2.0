import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Category, { categories, filterCategory } from "../../components/Category";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Home() {
  return (
    <>
      <Header />
      <Banner image="favoritos" /> 
      <Container>
        {categories.map((category, index) => (
          <Category key={index} category={category}>
            {filterCategory(index).map((video) => (
              <Card key={video.id} id={video.id} />
            ))}
          </Category>
        ))}
      </Container>
      <Footer />
    </>
  );
}


export default Home;
