import { IconCode } from "@tabler/icons";
import Link from "next/link";
import useTema from "../../data/hooks/useTema";

interface MenuItemProps {
    icone?: any;
    titulo: string;
    tag?: string;
    url: string;
    mini?: boolean;
    selecionado?: boolean | undefined;
}

export default function MenuItem(props: MenuItemProps) {
    const { icone, titulo, tag, url, mini, selecionado } = props;
    const { corDestaque } = useTema();

    return (
        <Link
            id={titulo}
            href={url}
            className={`
                ${selecionado ? `text-${corDestaque} bg-zinc-900`: 'text-zinc-400'}
                flex items-center gap-2  rounded-md
                hover:bg-zinc-800 px-3 py-2
            `}
        >
            {icone ?? <IconCode />}
            {!mini && titulo}
            {!mini && tag && (
                <span
                    className={`
                    ${selecionado ? `bg-${corDestaque}` : "bg-zinc-700"}
                    text-white text-[11px] rounded-full px-2
                `}
                >
                    {tag}
                </span>
            )}
        </Link>
    );
}
