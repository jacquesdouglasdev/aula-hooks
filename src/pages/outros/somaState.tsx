import { useEffect, useState } from "react";
import InputFormatado from "../../components/formulario/InputFormatado";
import Botao from "../../components/template/Botao";
import Display from "../../components/template/Display";
import Flex from "../../components/template/Flex";
import Pagina from "../../components/template/Pagina";

export default function () {
    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);
    const [validade1, setValidade1] = useState(false);
    const [validade2, setValidade2] = useState(false);
    const [resultado, setResultado] = useState(0);

    useEffect(() => {
      setValidade1(valor1 > 0);
      }, [valor1]);

    useEffect(() => {
      setValidade2(valor2 > 0);
    }, [valor2]);

    function fazResultado() {
        if (validade1 && validade2) {
            setResultado(valor1 + valor2);
        } else {
            setResultado(-9999);
        }
    }

    return (
      <Pagina titulo="Soma com useState" subtitulo="Exemplo de soma com useState">
        <Flex col centerCross>
          <Display texto="Faça uma soma" />
          <Flex center>
            <InputFormatado
              tipo="number"
              valor={valor1}
              onInput={(e) => {setValor1(+e.target.value)}}
            />
            <span className="text-4xl ml-4">+</span>
            <InputFormatado
              tipo="number"
              valor={valor2}
              onInput={(e) => {setValor2(+e.target.value)}}
            />
            <Botao 
              cor="bg-orange-400" 
              texto="=" 
              onClick={fazResultado}
          />
          </Flex>
          <Display texto={resultado} />
        </Flex>
      </Pagina>
    );
}
