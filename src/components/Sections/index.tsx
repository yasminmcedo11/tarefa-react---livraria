import ShowMoreButton from "../Buttons/ShowMoreButtons";
import styles from "./styles.module.css"
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

interface SectionsProps {
    genre: string; 
  }

export default function Sections({ genre }: SectionsProps){
    const [livros, setLivros] = useState<Livro[]>([])
    const generoLivro = genre
    const [genero, setGenero] = useState<string>(generoLivro);

    

    useEffect(() => {
        api.get("/livros")
        .then((response) => {
            const livrosFiltrados = response.data
            .filter((livro: Livro) => livro.genero === genero)
            .slice(0, 4)

            setLivros(livrosFiltrados)
        })
        .catch((error) => {
            console.error('Erro ao buscar livros:', error);
          })
    }, [genero])

    return (
        <> 
            <section>
                <div className={styles.indice}>
                    <h2>{generoLivro}</h2>
                    <ShowMoreButton genre={generoLivro}/>
                </div>
                <div>
                    <ul className={styles.lista}>
                    {livros.map((livro, index) => (
                        <li key={index}>
                            <img src={livro.capa} className={styles.foto} alt="Capa do Livro"/>
                            <div className={styles.container}>
                                <div>
                                    <h2>{livro.titulo}</h2>
                                    <p>{livro.autor}</p>
                                </div>
                                <p>{formatarPreco(livro.preco)}</p>
                            </div>
                        </li>
                    ))}
                    </ul>
                </div>
            </section>
        </>
    )
}