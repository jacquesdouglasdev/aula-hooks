import { useEffect, useState } from "react";
import Pagina from "../../components/template/Pagina";
import Display from "../../components/template/Display";
import Flex from "../../components/template/Flex";
import Botao from "../../components/template/Botao";

export default function () {
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [maior, setMaior] = useState(0)

    function calcularMaior() {
        return n1 > n2 ? n1 : n2
    }

    useEffect(() => {
        setMaior(calcularMaior())
    }, [n1, n2])

    useEffect(() => {
        console.log(`N1: ${n1}, N2: ${n2}, Maior: ${maior}`)
    }, [n1, n2, maior])

    useEffect(() => {
        if(maior > 5) {
            alert("O maior número é maior que 5!")
        }
    }, [maior])
    
    return (
        <Pagina titulo="">
            <Display texto={`N1: ${n1} | N2: ${n2}`} textoComplementar={`O maior número é ${maior}`} />
            <Flex gap={5}>
                <Botao 
                    onClick={() => setN1(n1+1)}
                    redondo
                    tamanho="2xl"
                    cor="bg-red-500"
                    texto="N1"
                />
                <Botao 
                    onClick={() => setN2(n2+1)}
                    redondo
                    tamanho="2xl"
                    cor="bg-blue-500"
                    texto="N2"
                />
            </Flex>
        </Pagina>
    )
}