import Image from "next/image";

export default function MiniCurriculo() {
    return (
        <div
            className="
                flex flex-1 gap-6 h-full
                px-6 pt-10 justify-around
                flex-col-reverse md:flex-row lg:flex-col-reverse xl:flex-row 
                items-center md:items-start lg:items-center xl:items-start
                bg-black border border-zinc-800 rounded-2xl 
            "
        >
            <div className="relative min-w-48 h-72">
                <Image
                    src="/minha-foto.jpg"
                    alt="Foto de Welton Matos"
                    className="rounded-2xl object-cover object-center pb-6"
                    fill
                />
            </div>

            <div
                className="
                    flex flex-col gap-5 self-center py-6 
                    items-center md:items-start lg:items-center xl:items-start
                "
            >
                <div
                    className="
                        flex flex-col 
                        items-center md:items-start lg:items-center xl:items-start
                    "
                >
                    <span className="bg-gradient-to-r from-green-500 via-white to-white text-transparent bg-clip-text text-2xl font-bold">Welton Matos</span>
                    <span>Engenheiro de Software</span>
                </div>

                <p
                    className="
                        text-sm 
                        text-center md:text-left lg:text-center xl:text-left
                    "
                >
                    Engenheiro de software e desenvolvedor full stack especializado em React.js, React Native, Nest.js e Node.js. Experiência em aplicações web e mobile escaláveis, com foco em performance, usabilidade e arquitetura limpa. Apaixonado por inovação e soluções eficientes.
                </p>
            </div>
        </div>
    )
}