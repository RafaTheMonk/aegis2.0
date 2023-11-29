/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./Entrada.module.css";
import Header from "../../components/Header";
import Footer from '../../components/Footer/index';
import cadeado  from "./images/cadeado.png"
import badge1 from "./images/CEH_Badge.png"
import badge2 from "./images/cism.webp"
import badge3 from "./images/CISSP.png"
import dados from "./images/dados.png"

function Entrada() {
    return (
        <>
        <Header />
        <body className={styles.body}>
            <section className={styles.home}>

                <div className={styles.home_text}>
                    <h1>Aegis</h1>
                    <h2>CiberSecurity School</h2>
                    <h5>Desenvolvido por Team EMB <span> da Bahia - Brasil </span></h5>
                    <p>A Aegis é uma iniciativa pioneira do time EMB (Evo Mind and Body) que tem como objetivo oferecer treinamento especializado em segurança cibernética para empresas e usuários comuns que desejam se familiarizar com os novos conceitos de segurança na era digital.</p>

                    <div className={styles.homeCardGroup}>
                        <a href="#"><i className={styles.homeCard}></i></a>
                        <a href="#"><i className={styles.homeCard}></i></a>
                        <a href="#"><i className={styles.homeCard}></i></a>
                    </div>

                    

                </div>

                    <img src={cadeado} alt="Cadeado"/>

            </section>

            <section className={styles.services}>
                <h1>Venha se certificar conosco!</h1>
                <div className={styles.certificados_group}>

                    <div className={styles.certificados_card}>
                        <img src={badge3} alt="CIISP" />
                        <h3>CIISP</h3>
                        <p>O CISSP é uma certificação altamente reconhecida mundialmente em segurança da informação. O curso abrange os dez domínios do CBK do CISSP e é constantemente atualizado para refletir os problemas atuais e contramedidas em segurança de sistemas. É uma certificação que atesta suas habilidades em proteger sistemas de informação e é amplamente valorizada no mercado.</p>
                    </div>

                    <div className={styles.certificados_card}>
                        <img src={badge1} alt="CEH" />
                        <h3>CEH</h3>
                        <p>O CEH (Certified Ethical Hacker) é uma certificação internacionalmente reconhecida para profissionais de segurança da informação. Também conhecido como "Hacker Ético", foca em auditoria, teste de invasão e segurança da informação. A certificação capacita os profissionais a identificar vulnerabilidades e proteger organizações contra ataques cibernéticos, agindo de forma ética. É altamente valorizada no mercado e ideal para carreiras em cibersegurança.</p>
                    </div>

                    <div className={styles.certificados_card}>
                        <img src={badge2} alt="CISM" />
                        <h3>CISM</h3>
                        <p>O CISM (Certified Information Security Manager) é uma certificação reconhecida globalmente em gestão de segurança da informação. É voltada para profissionais que lideram e gerenciam programas de segurança corporativa. A certificação CISM é um padrão de referência no setor, abrangendo estratégias e práticas de gerenciamento de segurança eficazes. </p>
                    </div>
                </div>
            </section>

            <section className={styles.about}>
                <img src={dados} alt="sobreNos" />
                <div className={styles.about_text}>
                    <h3>Bem-vindo ao futuro!</h3>
                    <p>Em um mundo cada vez mais conectado, onde a tecnologia desempenha um papel fundamental em nossas vidas, é essencial estar preparado para lidar com os desafios e ameaças que surgem no ambiente digital. A CiberSecurity School foi desenvolvida para capacitar os participantes a entenderem e enfrentarem esses desafios de forma proativa.
                    </p>
                    <a href="#" className={styles.btn}>Assine aqui</a>
                </div>
            </section>

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

            <section className={styles.contact}>

                <div className={styles.contact_text}>

                    <h3>Fale conosco</h3>

                    <p>Lorem ipsum dolor, sit, amet consectetur adipisicing elit.</p>

                </div>

                <form>
                    <input type="email" name="email" placeholder="Digite seu e-mail para a resposta" required />
                    <input type="text" name="text" placeholder="Envie sua mensagem" required />
                    <input type="submit" name="submit" />
                </form>

            </section>
        </body>
        <Footer />
        </>
    );
}

export default Entrada;
