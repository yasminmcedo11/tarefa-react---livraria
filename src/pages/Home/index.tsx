import fotoBanner from "../../assets/Banner.png"
import Sections from "../../components/Sections"
import styles from "./styles.module.css"


export default function Home() {

    return (
        <>
            <section className={styles.banner}>
                <img src={fotoBanner}  alt="Banner de Produtos"/>
                <p>25% de desconto <br/><span>nos livros do Paulo <br/>Coelho!</span></p>
            </section>
            <Sections genre="Best-sellers"/>
            <Sections genre="Clássicos"/>
            <Sections genre="Fantasia"/>
            <Sections genre="Infantil"/>
            <Sections genre="Suspense"/>
            <Sections genre="Distopia"/>
            <Sections genre="Ficção Científica"/>
        </>
        
    )
}