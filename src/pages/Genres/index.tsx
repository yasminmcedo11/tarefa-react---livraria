import styles from "./styles.module.css"
import fotoBanner from "../../assets/Banner.png"
import { FaSearch } from "react-icons/fa";


export default function Genres() {
    return (
        <>
        <div className={styles.container}>
            <span className={styles.searchIcon}><FaSearch /></span>
            <input 
                className={styles.search}
                placeholder={`Pesquisar por título`}
                //value={filtro}
                //onChange={(e) => setFiltro(e.target.value)}
            />
        </div>
            <main>
                <h2> Página do Genêro</h2>
                <ul className={styles.lista}>
                    <li>
                        <img src={fotoBanner} className={styles.foto} alt="Capa do Livro"/>
                        <div>
                            <div className={styles.info}>
                                <h2>Nome do Livro</h2>
                                <p>Autor do Livro</p>
                            </div>
                            <p className={styles.price}>R$32,90</p>
                        </div>
                    </li>
                </ul>
            </main>
        </>
    )
}