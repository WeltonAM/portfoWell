import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import Menu from "./Menu";

export default function Cabecalho() {
    return (
        <header className="flex items-center h-16 bg-black/50 w-full">
            <Container className="flex-1 flex justify-center sm:justify-between items-center">
                <div className="flex items-center gap-10">
                    <Link href="/" className="cursor-pointer hidden sm:block">
                        <Image src="/logo.svg" alt="Logo" width={80} height={0} />
                    </Link>

                    <Menu />
                </div>

                <div className="hidden sm:block">
                    <Link
                        href="https://www.linkedin.com/in/welton-matos-484a591b9/"
                        target="_blank"
                        className="cursor-pointer bg-red-500 rounded-full px-7 py-1 text-sm font-bold"
                    >
                        Perfil
                    </Link>
                </div>
            </Container>
        </header>
    );
}