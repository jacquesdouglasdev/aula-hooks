import { useEffect, useState } from "react";
import Display from "../../components/template/Display";
import Pagina from "../../components/template/Pagina";

export default function () {
    const quantidadeCaracteres = 300
    const [caracteresRestantes, setCaracteresRestantes] = useState(quantidadeCaracteres)
    const [texto, setTexto] = useState("")


    useEffect(() => {
        let timer = setTimeout(() => {
        setCaracteresRestantes(quantidadeCaracteres - texto.length)
        }, 200)
        return () => clearTimeout(timer)
    }, [texto])
    
    return (
        <Pagina titulo="Contagem de Caracteres" subtitulo="Entendendo as funções de limpeza">
            <Display texto="Digite o texto" textoComplementar={`${caracteresRestantes} caracteres restantes`}/>
            <textarea
                value={texto}
                onInput={(e) => {setTexto(e.currentTarget.value)}}
                className={`border border-zinc-700 bg-zinc-700 text-white text-2xl w-3/5 h-72 rounded p-5`}
            ></textarea>
        </Pagina>
    )
}