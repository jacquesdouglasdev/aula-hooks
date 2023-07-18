import { useState } from "react";
import InputFormatado from "../../components/formulario/InputFormatado";
import Botao from "../../components/template/Botao";
import Display from "../../components/template/Display";
import Flex from "../../components/template/Flex";
import Pagina from "../../components/template/Pagina";

export default function m() {
    const [quantidade, setQuantidade] = useState(0)

    function finalizar(e) {
        e.preventDefault()
        alert(`Compra finalizada!`)
        setQuantidade(0)
    }


    return (
        <Pagina titulo="Memoizando Funções" subtitulo="Entendendo o hook useCallback">
            <Display texto="Quantos produtos você quer?"/>
            <form>
                <Flex col center>
                    <InputFormatado
                        valor={quantidade}
                        tipo="number"
                        onInput={(e) => setQuantidade(+e.target.value)}
                    ></InputFormatado>
                    <Botao
                        texto="Confirmar"
                        onClick={(e) => finalizar(e)}
                    ></Botao>
                </Flex>
            </form>
        </Pagina>
    )
}