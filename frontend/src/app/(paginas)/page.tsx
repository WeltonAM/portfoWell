import dynamic from "next/dynamic";

const Curriculo = dynamic(() => import("@/components/curriculo"));
const Principal = dynamic(() => import("@/components/landing/Principal"));
const Projetos = dynamic(() => import("@/components/projetos/Projetos"));
const Container = dynamic(() => import("@/components/shared/Container"));

import { obterProjetos } from "@/functions/projetos";
import { obterTecnologias } from "@/functions/tecnologias";

export default async function Home() {
  const tecnologias = await obterTecnologias();
  const projetos = await obterProjetos();

  return (
    <div>
      <Principal tecnologias={tecnologias.destaques} />

      <Container className="py-16 flex flex-col gap-10 items-center">
        <Projetos titulo="Destaques" projetos={projetos.destaques} />
        <Projetos titulo="Mobile" projetos={projetos.mobile} />
        <Projetos titulo="Web" projetos={projetos.web} />
        <Projetos titulo="Jogos" projetos={projetos.jogos} />

        <Curriculo tecnologias={tecnologias.todas} />
      </Container>
    </div>
  );
}
