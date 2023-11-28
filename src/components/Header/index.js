import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <span>Acervo Aegis</span>
            <img src="./LogoAegis.png"/>
            <nav>
                <a href="#" className={styles.link}>Home</a>
                <a href="#" className={styles.link}>Assistir</a>
            </nav>
        </header>
    );
}

export default Header;
