import Header from "./components/Header";
import Footer from './components/Footer/index';
import Banner from "./components/Banner";
import Container from "./components/Container";
import Card from './components/Card/index';
import Category, { categories, filterCategory } from "./components/Category/index.js";

function App() {
  return (
    <>
      <Header />
      <Banner image="favoritos" />
      <Container>
        
        {
          categories.map((category, index)=>
            <Category category={category}>
              { filterCategory(index).map((video)=> <Card id={video.id} key={video.id} />)}
            </Category>
          )
        }

      </Container>
      <Footer />
    </>
  );
}

export default App;
