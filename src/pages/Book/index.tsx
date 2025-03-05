import fotoBanner from "../../assets/Banner.png"
import styles from "./styles.module.css"


export default function Book() {
    const preco = "R$32,90"

    return (
        <>
            <section>
                <h2>Detalhes do Livro</h2>
                <div className={styles.container}>
                    <div className={styles.foto}>
                        <img src={fotoBanner} className={styles.foto} alt="Capa do Livro"/>
                    </div>
                    <div className={styles.infoContainer}>
                        <div className={styles.info}>
                            <h2>Nome do Livro</h2>
                            <p>Autor do Livro</p>
                        </div>
                        <div className={styles.sinopse}>
                            <h3>Sinopse</h3>
                            <p>Duna se passa em um futuro distante, em meio a uma sociedade feudal interestelar na qual várias casas nobres controlam feudos planetários. A história acompanha o jovem Paul Atreides, cuja família aceita a administração do planeta Arrakis. Embora o planeta seja um deserto inóspito e escassamente povoado, é a única fonte de melange, ou "especiaria", uma droga que prolonga a vida e aumenta as habilidades mentais. A melange também é necessária para a navegação espacial, que exige um tipo de consciência multidimensional e presciência que só a droga proporciona. Como a melange só pode ser produzida em Arrakis, o controle do planeta é uma empreitada cobiçada e perigosa. A história explora as complexas interações de política, religião, ecologia, tecnologia e emoção humana, enquanto as facções do império se confrontam em uma luta pelo controle de Arrakis e de sua especiaria.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.button}>
                <button>
                    <span>{preco}</span>Adicionar ao carrinho 
                </button>
                </div>
            </section>
        
        </>
    )
}