import ShowMoreButton from "../Buttons/ShowMoreButtons";
import styles from "./styles.module.css"
import fotoBanner from "../../assets/Banner.png"


export default function Sections() {
    return (
        <> 
            <section>
                <div className={styles.indice}>
                    <h2>Gênero</h2>
                    <ShowMoreButton/>
                </div>
                <div>
                    <ul className={styles.lista}>
                        <li>
                            <img src={fotoBanner} className={styles.foto} alt="Capa do Livro"/>
                            <div className={styles.container}>
                                <div>
                                    <h2>Nome do Livro</h2>
                                    <p>Autor do Livro</p>
                                </div>
                                <p>Preço do Livro</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}