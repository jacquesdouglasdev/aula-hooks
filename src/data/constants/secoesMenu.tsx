import { IconAppWindow, IconArrowsLeftRight, IconColorSwatch, IconDatabase, IconDatabaseImport, IconDimensions, IconForms, IconLetterCase, IconLock, IconMathGreater, IconNumbers, IconPin, IconRefreshAlert, IconSection, IconShoppingCart, IconTextColor, IconUsers } from "@tabler/icons";

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
            {titulo: "Memoizando Elementos", tag: "useMemo", url: "/outros/memoizacao", icone: <IconPin/>},
            {titulo: "Memoizando Funções", tag: "useCallback", url: "/outros/memoizandoFuncoes", icone: <IconPin/>},
            {titulo: "Formulario 1", tag: "useImperativeHandle", url: "/outros/formularioImperativeHandle", icone: <IconForms/>},
            {titulo: "Texto secreto", tag: "useLayoutEffect", url: "/outros/texto", icone: <IconTextColor/>},
            {titulo: "Gerador de Cor", tag: "useLayoutEffect", url: "/outros/geradorDeCor", icone: <IconColorSwatch/>},
            {titulo: "Soma com useState", tag: "useState", url: "/outros/somaState", icone: <IconDatabase/>},
            {titulo: "Soma com useReducer", tag: "useReducer", url: "/outros/somaReducer", icone: <IconDatabaseImport/>},
            {titulo: "Formulario 1", tag: "useId", url: "/outros/formularioId1", icone: <IconForms/>},
            {titulo: "Formulario 2", tag: "useId", url: "/outros/formularioId2", icone: <IconForms/>},
        ],
    },
];

export default secoes;