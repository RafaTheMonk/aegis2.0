import Header from "../../components/Header";
import Footer from '../../components/Footer/index';
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Card from '../../components/Card/index';
import Category, { categories, filterCategory } from "../../components/Category/index.js";
import { useState } from "react";

function Home() {

  function pegarNome(event) {
    setNome(event.target.value)
  }

  // Hook -> useState, serve para trabalhar com controle de estado, uma variável tem estados, seja o inicial ou o que vai mudar
  const [ nome, setNome ] = useState('começo')

  return (
    <>
      <Header />
      <Banner image="favoritos" />
      <Container>
        <input 
          type="text"
          placeholder="Nome"
          onChange={pegarNome}
        />
        <h2>{ nome }</h2>
        {/* { categories.map((category, index)=>
            <Category category={category}>
              { filterCategory(index).map((video)=> <Card id={video.id} key={video.id} />)}
            </Category>
          )} */}

      </Container>
      <Footer />
    </>
  );
}

export default Home;
