import ExperienciaItem from "./ExperienciaItem";

export default function Experiencia() {
    return (
        <div className="flex flex-col sm:flex-row lg:flex-col items-center bg-black border border-zinc-800 rounded-2xl gap-6 p-6 justify-around">
            <ExperienciaItem principal="11 meses" label="estágio em desenvolvimento" />
            <ExperienciaItem principal="+2 anos" label="engenheiro de software" />
            <ExperienciaItem principal="2026" label="graduado em Engenharia de Software" />
        </div>
    )
}