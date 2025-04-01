'use client'
import { usePathname } from "next/navigation";
import MenuItem from "./MenuItem";

export default function Menu() {
    const caminho = usePathname();

    return (
        <nav className="flex gap-6">
            <MenuItem href="/" selecionado={caminho === "/"}>Início</MenuItem>
            <MenuItem href="/projeto/1" selecionado={caminho.startsWith("/projeto")}>Projetos</MenuItem>
            <MenuItem href="https://api.whatsapp.com/send/?phone=&text&type=phone_number" selecionado={false} novaAba={true}>Contato</MenuItem>
        </nav>
    );
}
