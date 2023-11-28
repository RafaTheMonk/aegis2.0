import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from './../../components/Container/index';
import styles from "./Watch.module.css";
import { useParams } from "react-router-dom";
import videos from '../../json/videos.json';
import PageNotFound from './../PageNotFound/index';

function Watch(){
    const params = useParams();
    const video = videos.find( video => { return video.id === params.id })
    if(!video){ return <PageNotFound /> }

    return(
        <>
            <Header />
            <Container>
                <section className={styles.watch}>
                    <iframe 
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen></iframe>
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Watch;
