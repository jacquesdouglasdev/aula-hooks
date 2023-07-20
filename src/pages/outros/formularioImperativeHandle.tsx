import { useRef } from "react";
import InputComReferencia from "../../components/formulario/InputComReferencia";
import Flex from "../../components/template/Flex";
import Pagina from "../../components/template/Pagina";
import Botao from "../../components/template/Botao";

export default function() {
    const referencia = useRef<any>();

    function apagar() {
        referencia.current.apagar();
    }

    function textoPadrao() {
        referencia.current.textoPadrao();
    }

    return (
        <Pagina titulo="Modificando uma referência" subtitulo="usando udeRef e useImperativeHandle">
            <Flex col center>
                <InputComReferencia
                    tipo="text"
                    label="Digite o texto"
                    ref={referencia}
                />
                <Flex>
                    <Botao texto="Apagar" onClick={apagar}></Botao>
                    <Botao texto="Padrão" onClick={textoPadrao}></Botao>
                </Flex>
            </Flex>
        </Pagina>
    )
}