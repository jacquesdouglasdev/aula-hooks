import { useEffect, useState } from "react";
import Pagina from "../../components/template/Pagina";

export default function () {
    const [url, setUrl] = useState()

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(resposta => resposta.json())
        .then(dados => setUrl(dados.message))
    }, [])

    return (
        <Pagina titulo="Requisição à API" subtitulo="Requerindo dados">
            <img src={url} alt="imagem de cachorro" className="max-w-sm"/>
        </Pagina>
    )
}