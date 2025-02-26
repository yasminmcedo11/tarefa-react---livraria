import logo from "../../assets/Logo (Stroke).png"
import fotoLogin from "../../assets/fotoLogin.png"
import SubmitButton from "../../components/Buttons/SubmitButtons"
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
                    <form className={styles.forms}>
                        <div className={styles.inputs}>
                            <p>Email</p>
                            <input placeholder="Digite seu email aqui" required/>
                        </div>
                        <div className={styles.inputs}>
                            <p>Senha</p>
                            <input placeholder="Digite sua senha aqui" required/>     
                        </div>                      
                    </form>
                    <div className={styles.submits}>
                        <SubmitButton text="Entrar" link="/"/> 
                        <SubmitButton className={styles.button} text="Cadastre-se"/> 
                    </div>
                </div>
            </main>
        </>
    )
}