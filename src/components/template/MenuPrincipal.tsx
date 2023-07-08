import { IconArrowsLeftRight, IconLetterCase, IconMathGreater, IconMenu, IconNumbers, IconRefreshAlert, IconSection, IconUsers, IconX } from "@tabler/icons";
import { MenuItem } from "../../data/models/MenuItem";
import { MenuSecao } from "../../data/models/MenuSecao";
import Logo from "./Logo";
import MenuPrincipalItem from "./MenuPrincipalItem";
import MenuPrincipalSecao from "./MenuPrincipalSecao";
import Flex from "./Flex";

export default function MenuPrincipal() {
    const secoes = [
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
            aberta: true,
            itens: [
                
            ],
        },
    ];
    const mini = false;
    function renderizarSecoes() {
        return secoes.map((secao: MenuSecao) => (
            <MenuPrincipalSecao key={secao.titulo} titulo={secao.titulo} mini={mini} aberta={secao.aberta}>
                {renderizarItens(secao)}
            </MenuPrincipalSecao>
        ));
    }

    function renderizarItens(secao: MenuSecao) {
        return secao.itens.map((item: MenuItem) => (
            <MenuPrincipalItem
                key={`${item.titulo}-${item.tag}`}
                icone={item.icone}
                titulo={item.titulo}
                tag={item.tag}
                url={item.url}
                mini={mini}
            />
        ));
    }

    return (
        <aside
            className={`
            flex flex-col overflow-y-scroll overflow-x-hidden
            bg-black shadow-md shadow-zinc-800
            scrollbar-thumb-zinc-700 scrollbar-track-zinc-800 
            scrollbar-thin
            ${mini ? "items-center w-[130px]" : "w-[370px]"}
        `}
        >
            <Flex center className="m-7">
                {!mini && <Logo />}
            </Flex>
            <nav className="flex flex-col gap-4 m-7">{renderizarSecoes()}</nav>
        </aside>
    );
}
