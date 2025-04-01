import { Tecnologia } from "@core";
import Cabecalho from "../shared/Cabecalho";
import Tecnologias from "../tecnologias/Tecnologias";

export interface PrincipalProps {
    tecnologias: Tecnologia[]
}

export default function Principal(props: PrincipalProps) {
    return (
        <div
            className="
                flex flex-col items-center justify-center h-[500px]
                bg-[url('/principal.jpg')] bg-cover bg-center
            "
        >
            <Cabecalho />

            <div className="flex-1 w-full flex flex-col justify-center items-center gap-5">
                <div className="flex flex-col gap-1 justify-center items-center px-4">
                    <h1 className="flex gap-3 items-center">
                        <span className="w-2 h-2 rounded-full bg-green-700"></span>
                        <span className="text-3xl sm:text-5xl font-bold text-center">Welton Matos</span>
                        <span className="w-2 h-2 rounded-full bg-green-700"></span>
                    </h1>
                    <h2 className="text-zinc-500 text-center">
                        Desenvolvedor Full Stack
                    </h2>
                </div>

                <Tecnologias tecnologias={props.tecnologias} />
            </div>
        </div>
    );
}