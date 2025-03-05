import styles from "./styles.module.css"

export default function ShowMoreButton() {
    const buttonText = "Ver mais"

    return (
        <button className={styles.button}>
            {buttonText}
        </button>
    )
}