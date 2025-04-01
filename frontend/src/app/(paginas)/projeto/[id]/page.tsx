import dynamic from "next/dynamic";

const Readme = dynamic(() => import("@/components/projetos/Readme"));
const Cabecalho = dynamic(() => import("@/components/shared/Cabecalho"));
const CarrosselImagens = dynamic(() => import("@/components/shared/CarrosselImagens"));
const Container = dynamic(() => import("@/components/shared/Container"));
const Tecnologias = dynamic(() => import("@/components/tecnologias/Tecnologias"));

import { obterReadme } from "@/functions/github";
import { obterProjeto } from "@/functions/projetos";

export default async function PaginaProjeto(props: { params: Promise<{ id: string }> }) {
    const { id } = await props.params;
    const projeto = await obterProjeto(id);

    if (!projeto) return null;

    const readme = await obterReadme(projeto.repositorio);

    return (
        <div className="bg-black">
            <Cabecalho />

            <Container className="py-7 flex flex-col gap-10 items-center">
                <h1 className="text-3xl font-bold self-start">{projeto.nome}</h1>

                <CarrosselImagens imagens={projeto.imagens.slice(1)} />
                <Tecnologias tecnologias={projeto.tecnologias} tamanhoMenor />

                <Readme conteudo={readme} />
            </Container>
        </div>
    );
}
