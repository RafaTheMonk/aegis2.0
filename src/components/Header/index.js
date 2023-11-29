/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Logo from "./Vector-2.png"

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <img src={ Logo }/>
            </Link>
            <nav>
                <Link to="/">Página principal</Link>
                <Link to="/Home">Biblioteca</Link>
                <Link to="/watch">Assistir</Link>
                <Link to="/search">Pesquisar</Link>
            </nav>
        </header>
    );
}

export default Header;
