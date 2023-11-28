import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from './../../components/Container/index';
import styles from "./Watch.module.css";

function Watch(){
    return(
        <>
            <Header />
            <Container>
                <section className={styles.watch}>
                    <iframe src="https://www.youtube.com/embed/HEaIsKm-pao?si=sqiWyzhJf_-EFscM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Watch;
