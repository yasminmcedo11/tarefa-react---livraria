import logo from "../../assets/Logo (Stroke).png"
import profile from "../../assets/Profile.png"
import shop from "../../assets/Shop.png"
import styles from "./styles.module.css"


export default function Header() {
    return (
        <header className={styles.container}>
            <nav>
                <img className={styles.logo} src={logo} alt="Logo da Livraria"/>
                <div>
                    <button className={styles.buttons}>
                        <img src={profile} alt="Logo da Livraria"/>
                    </button>
                    <button className={styles.buttons}>
                        <img src={shop} alt="Logo da Livraria"/>
                    </button>
                </div>
            </nav>
        </header>
    )
}