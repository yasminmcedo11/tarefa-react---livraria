import logo from "../../assets/Logo (Stroke).png"
import fotoLogin from "../../assets/fotoLogin.png"
import Forms from "../../components/Forms"
import styles from "./styles.module.css"

export default function Login() {
    return (
        <>
            <main className={styles.container}>
                <img src={fotoLogin} className={styles.login} alt="Foto da Livraria"/>
                <div className={styles.info}>
                    <img src={logo} className={styles.logo} alt="Foto da Livraria"/>
                    <div className={styles.welcome}>
                        <p>Bem vindo(a)!</p>
                        <h2>Entre na sua conta</h2>
                    </div>
                    <Forms/>
                </div>
            </main>
        </>
    )
}