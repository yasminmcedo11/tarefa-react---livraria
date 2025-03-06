import styles from "./styles.module.css"
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import api from "../../services/api";
import formatarPreco from "../../hooks/Price";

interface Livro {
    id: number
    titulo: string
    autor: string
    genero: string
    preco: number
    sinopse: string
    capa: string
}

export default function Genres() {
    const [livros, setLivros] = useState<Livro[]>([])
    const generoLivro = "Fantasia"
    const [genero, setGenero] = useState<string>(generoLivro);

    useEffect(() => {
        api.get("/livros")
        .then((response) => {
            const livrosFiltrados = response.data
            .filter((livro: Livro) => livro.genero === genero)

            setLivros(livrosFiltrados)
        })
        .catch((error) => {
            console.error('Erro ao buscar livros:', error);
          })
    }, [genero])

    return (
        <>
        <div className={styles.container}>
            <span className={styles.searchIcon}><FaSearch /></span>
            <input 
                className={styles.search}
                placeholder={`Pesquisar por título`}
                //value={filtro}
                //onChange={(e) => setFiltro(e.target.value)}
            />
        </div>
            <main>
                <h2> {generoLivro}</h2>
                <ul className={styles.lista}>
                {livros.map((livro, index) => (
                        <li key={index}>
                            <img src={livro.capa} className={styles.foto} alt="Capa do Livro"/>
                            <div className={styles.info}>
                                <div>
                                    <h2>{livro.titulo}</h2>
                                    <p className={styles.autor}>{livro.autor}</p>  
                                </div>
                                <p className={styles.price}>{formatarPreco(livro.preco)}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    )
}