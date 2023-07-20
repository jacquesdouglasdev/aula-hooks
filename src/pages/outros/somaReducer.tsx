import { Reducer, useReducer } from "react";
import InputFormatado from "../../components/formulario/InputFormatado";
import Botao from "../../components/template/Botao";
import Display from "../../components/template/Display";
import Flex from "../../components/template/Flex";
import Pagina from "../../components/template/Pagina";

function mudaDados(estadoAtual, acao) {
    switch (acao.type) {
        case "ALTERA_VALOR1":
            return {...estadoAtual, valor1: acao.valor, validade1: acao.valor > 0};
        case "ALTERA_VALOR2":
            return {...estadoAtual, valor2: acao.valor, validade2: acao.valor > 0};
        case "SOMA":
            if (estadoAtual.validade1 && estadoAtual.validade2) {
                return {...estadoAtual, resultado: estadoAtual.valor1 + estadoAtual.valor2};
            } else {
                return {...estadoAtual, resultado: -9999};
            }
    }
}

export default function () {
    const [dados, dispatchDados] = useReducer<Reducer<any, any>>(mudaDados, {
        valor1: 0,
        valor2: 0,
        validade1: false,
        validade2: false,
        resultado: 0,
    })
   
    return (
      <Pagina titulo="Soma com useState" subtitulo="Exemplo de soma com useState">
        <Flex col centerCross>
          <Display texto="Faça uma soma" />
          <Flex center>
            <InputFormatado
              tipo="number"
              valor={dados.valor1}
              onInput={(e) => {dispatchDados({type: "ALTERA_VALOR1", valor: +e.target.value})}}
            />
            <span className="text-4xl ml-4">+</span>
            <InputFormatado
              tipo="number"
              valor={dados.valor2}
              onInput={(e) => {dispatchDados({type: "ALTERA_VALOR2", valor: +e.target.value})}}
            />
            <Botao 
              cor="bg-orange-400" 
              texto="=" 
              onClick={() => {dispatchDados({type: "SOMA"})}}
          />
          </Flex>
          <Display texto={dados.resultado} />
        </Flex>
      </Pagina>
    );
}