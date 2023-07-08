import { useState } from "react";
import Display from "../../components/template/Display";
import Flex from "../../components/template/Flex";
import Pagina from "../../components/template/Pagina";
import Botao from "../../components/template/Botao";

export default function () {
    const [dados, setDados] = useState({votosVerde: 0, votosRoxo: 0})

    function votoRoxo() {
        //Poser ser que a variável dados tenha algum membro alterado durante a atualização
        //setDados({votosVerde: dados.votosVerde, votosRoxo: dados.votosRoxo + 1})
        setDados((dadosAtuais) => { return {votosVerde: dadosAtuais.votosVerde, votosRoxo: dadosAtuais.votosRoxo + 1}})
    }

    function votoVerde() {
        //setDados({votosVerde: dados.votosVerde + 1, votosRoxo: dados.votosRoxo})
        setDados((dadosAtuais) => { return {votosVerde: dadosAtuais.votosVerde + 1, votosRoxo: dadosAtuais.votosRoxo}})
    }

    function zerarVotacao() {
        //setDados({votosVerde: 0, votosRoxo: 0})
        setDados((dadosAtuais) => { return {votosVerde: 0, votosRoxo: 0}})
    }

    return (
        <Pagina titulo="Votação" subtitulo="Usando estado com objeto">
            <Flex col center>
                <Display 
                    texto="Qual a melhor cor?"
                    textoComplementar={`Verde:${dados.votosVerde} | Roxo:${dados.votosRoxo}`}
                />
                <Flex gap={5}>
                    <Botao 
                        cor="bg-green-600" 
                        onClick={votoVerde} 
                        redondo 
                        tamanho="2xl"
                    />
                    <Botao 
                        cor="bg-purple-600" 
                        onClick={votoRoxo} 
                        redondo 
                        tamanho="2xl"
                    />
                </Flex>
                <Botao 
                        texto="Zerar"
                        cor="bg-gray-700" 
                        onClick={zerarVotacao}
                        tamanho="lg"
                    />
            </Flex>
        </Pagina>
    )
}