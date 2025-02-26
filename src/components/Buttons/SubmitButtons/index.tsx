import { useNavigate } from "react-router-dom"
import styles from "./styles.module.css"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    link?: string
    className?: string
}


export default function SubmitButton(props: ButtonProps) {
    const navigate = useNavigate()
    const buttonText = props.text

    function handleClick() {
        if (props.link) {
            navigate(`${props.link}`) 
        }
    }

    return (
        <button {...props} className={`${styles.button} ${props.className}`} onClick={handleClick}>
            {buttonText}
        </button>
    )
}