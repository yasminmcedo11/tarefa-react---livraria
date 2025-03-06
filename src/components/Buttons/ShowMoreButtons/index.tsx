import { useNavigate } from "react-router-dom"
import styles from "./styles.module.css"

interface SectionsProps {
    genre: string; 
  }

export default function ShowMoreButton({ genre }: SectionsProps) {
    const buttonText = "Ver mais"
    const navigate = useNavigate()

    function handleClick() {
        navigate(`/genres/${genre}`);
    }


    return (
        <button className={styles.button}
            onClick={handleClick}>
            {buttonText}
        </button>
    )
}