import styles from "./styles.module.css"
import { FaChevronLeft, FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import api from "../../services/api";
import formatarPreco from "../../hooks/Price";
import { useNavigate, useParams } from "react-router-dom";

interface Livro {
    id: number
    titulo: string
    autor: string
    genero: string
    preco: number
    sinopse: string
    capa: string
}

type GenreParams = Record<string, string | undefined>;

export default function Genres() {
    const { genre } = useParams<GenreParams>();
    const [livros, setLivros] = useState<Livro[]>([])
    const generoLivro = genre
    const [genero, setGenero] = useState<string>(genre || "")
    const [filtro, setFiltro] = useState<string>('')
    const navigate = useNavigate()

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

    const livrosFiltrados = livros.filter(livro =>
        (livro.titulo).toLowerCase().includes(filtro.toLowerCase())
      );

    return (
        <>
        <div className={styles.container}>
            <span className={styles.searchIcon}><FaSearch /></span>
            <input 
                className={styles.search}
                placeholder={`Pesquisar por título`}
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
            />
        </div>
            <main>
                <h2 onClick={() => navigate("/")}> <FaChevronLeft size={16}/>  {generoLivro}</h2>
                <ul className={styles.lista}>
                {livrosFiltrados.map((livro, index) => (
                        <li key={index} onClick={()=> navigate(`/book/${livro.id}`)}>
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