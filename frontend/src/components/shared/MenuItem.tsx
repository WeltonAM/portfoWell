import Link from "next/link";

export interface MenuItemProps {
    href: string;
    children: React.ReactNode;
    selecionado: boolean;
    novaAba?: boolean;
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <Link href={props.href} target={props.novaAba ? "_blank" : "_self"} className="relative group">
            <span className={`text-sm ${props.selecionado ? "text-white" : "text-gray-300 group-hover:text-white"}`}>
                {props.children}
            </span>
            <span
                className={`
                    absolute bottom-0 left-1/2 h-0.5 w-0 bg-gray-600 transition-all duration-300 ease-out transform -translate-x-1/2
                    ${props.selecionado ? "w-full bg-red-600" : "group-hover:w-full group-hover:left-0 group-hover:translate-x-0"}
                `}
            />
        </Link>
    );
}