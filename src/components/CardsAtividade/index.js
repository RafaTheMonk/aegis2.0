/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./CardsAtividade.module.css"

function CardsAtividade (){
    return(
        <section className={styles.atividades}>
            <div className={styles.atividades_head}>
                <h3>Atividades educativas</h3>
                <p>Com cursos projetados para níveis iniciantes e intermediários, a escola aborda uma ampla gama de tópicos relevantes, desde noções básicas de segurança até técnicas avançadas de proteção de dados e prevenção de ataques cibernéticos. Os instrutores altamente qualificados e experientes da CiberSecurity School fornecem um ambiente de aprendizado dinâmico e interativo, utilizando abordagens práticas e exemplos do mundo real.</p>
            </div>
            <div className={styles.atividades_cardGroup}>
                <div className={styles.atividades_card}>
                    <img src="images/Quiz.png" alt="" />
                    <div className={styles.atividades_cardGroup_text}>
                        <a href="Quiz/Quiz_Index.html">
                            <h3>Quiz de Revisão</h3>
                            <h5>Faça uma breve revisão de tudo que você aprendeu ao longo dos seus estudos, de uma forma objetiva como um quiz.</h5>
                        </a>
                    </div>
                </div>
                <div className={styles.atividades_card}>
                    <img src="images/hacker.png" alt="" />
                    <div className={styles.atividades_cardGroup_text}>
                        <a href="">
                            <h3>Simulador de Vulnerabilidades</h3>
                            <h5>Dispositivo para simular possíveis ataques que você pode sofrer no dia dia.</h5>
                        </a>
                    </div>
                </div>
                <div className={styles.atividades_card}>
                    <img src="Quiz/" alt="" />
                    <div className={styles.atividades_cardGroup_text}>
                        <a href="">
                            <h3>Netflix</h3>
                            <h5>Video Streaming</h5>
                        </a>
                    </div>
                </div>
                <div className={styles.atividades_card}>
                    <img src="images/hamburguer.jpg" alt="" />
                    <div className={styles.atividades_cardGroup_text}>
                        <a href="">
                            <h3>Brito's Dinner</h3>
                            <h5>Snack Bar</h5>
                        </a>
                    </div>
                </div>
                <div className={styles.atividades_card}>
                    <img src="images/Bank.jpg" alt="" />
                    <div className={styles.atividades_cardGroup_text}>
                        <a href="">
                            <h3>Brito's Bank</h3>
                            <h5>Bank App</h5>
                        </a>
                    </div>
                </div>
                <div className={styles.atividades_card}>
                    <img src="images/urubu.jpg" alt="" />
                    <div className={styles.atividades_cardGroup_text}>
                        <a href="#">
                            <h3>Urubu do Pix</h3>
                            <h5>IQ options</h5>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CardsAtividade;
