import { useNavigate, useParams } from "react-router-dom";
import styles from "./styles.module.css"
import { useEffect, useState } from "react";
import api from "../../services/api";
import formatarPreco from "../../hooks/Price";
import { FaChevronLeft } from "react-icons/fa";


interface Livro {
    id: number
    titulo: string
    autor: string
    genero: string
    preco: number
    sinopse: string
    capa: string
}

export default function Book() {
    const { id } = useParams<{ id: string }>()
    const [livro, setLivro] = useState<Livro | null>(null);
    const navigate = useNavigate()

    useEffect(() => {
        if (!id) return;
        api.get(`/livros/${id}`)
        .then((response) => {
            setLivro(response.data)
        })
        .catch((error) => {
            console.error('Erro ao buscar livros:', error);
          })
    }, [])

    if (!livro) {
        return
    }

    return (
        <>
            <section>
                <h2 onClick={() => navigate("/")}> <FaChevronLeft size={16} />  Detalhes do Livro</h2>
                <div className={styles.container}>
                    <div className={styles.foto}>
                        <img src={livro.capa} className={styles.foto} alt="Capa do Livro"/>
                    </div>
                    <div className={styles.infoContainer}>
                        <div className={styles.info}>
                            <h2>{livro.titulo}</h2>
                            <p>{livro.autor}</p>
                        </div>
                        <div className={styles.sinopse}>
                            <h3>Sinopse</h3>
                            <p>{livro.sinopse}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.button}>
                <button>
                    <span>{formatarPreco(livro.preco)}</span>Adicionar ao carrinho 
                </button>
                </div>
            </section>
        
        </>
    )
}