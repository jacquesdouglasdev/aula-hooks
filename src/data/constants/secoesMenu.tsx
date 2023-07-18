import { IconAppWindow, IconArrowsLeftRight, IconDimensions, IconLetterCase, IconLock, IconMathGreater, IconNumbers, IconPin, IconRefreshAlert, IconSection, IconShoppingCart, IconUsers } from "@tabler/icons";

export const secoes = [
    {
        titulo: "Essenciais",
        aberta: false,
        itens: [
            {titulo: "Contador", tag: "useState", url: "/essenciais/contador", icone: <IconNumbers/>},
            {titulo: "Votação", tag: "useState", url: "/essenciais/votacao", icone: <IconUsers/>},
            {titulo: "Consulta API", tag: "useEffect", url: "/essenciais/consultaAPI", icone: <IconArrowsLeftRight/>},
            {titulo: "Maior", tag: "useEffect", url: "/essenciais/maior", icone: <IconMathGreater/>},
            {titulo: "Contagem de Caracteres", tag: "useEffect", url: "/essenciais/contagemCaracteres", icone: <IconLetterCase/>},
            {titulo: "Referencia Vs State", tag: "useRef", url: "/essenciais/stateVsRef", icone: <IconRefreshAlert/>},
            {titulo: "Referenciando um Elemento", tag: "useRef", url: "/essenciais/refElemento", icone: <IconSection/>},
            {titulo: "Contagem Caracteres", tag: "useRef", url: "/essenciais/contagemCaracteresRef", icone: <IconLetterCase/>},
        ],
    },
    {
        titulo: "Personalizados",
        aberta: false,
        itens: [
            {titulo: "Modal", tag: "personalizados", url: "/personalizados/modal", icone: <IconAppWindow/>},
            {titulo: "Tamanho da Janela", tag: "personalizados", url: "/personalizados/tamanhoJanela", icone: <IconDimensions/>},
            {titulo: "Validando Senha", tag: "personalizados", url: "/personalizados/senha", icone: <IconLock/>},
        ],
    },
    {
        titulo: "Contexto",
        aberta: false,
        itens: [
            {titulo: "Loja", tag: "contexto", url: "/contexto/loja", icone: <IconShoppingCart/>},
        ],
    },
    {
        titulo: "Outros",
        aberta: true,
        itens: [
            {titulo: "Memoizando Elementos", tag: "outros", url: "/outros/memoizacao", icone: <IconPin/>},
            {titulo: "Memoizando Funções", tag: "outros", url: "/outros/memoizandoFuncoes", icone: <IconPin/>},
        ],
    },
];

export default secoes;