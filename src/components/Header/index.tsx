import { useNavigate } from "react-router-dom"
import logo from "../../assets/Logo (Stroke).png"
import profile from "../../assets/Profile.png"
import shop from "../../assets/Shop.png"
import styles from "./styles.module.css"


export default function Header() {
    const navigate = useNavigate()

    return (
        <header className={styles.container}>
            <nav>
                <img className={styles.logo} 
                     src={logo} 
                     alt="Logo da Livraria"
                     onClick={() => navigate("/")}/>
                <div>
                    <button className={styles.buttons}
                            onClick={() => navigate("/login")}>
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