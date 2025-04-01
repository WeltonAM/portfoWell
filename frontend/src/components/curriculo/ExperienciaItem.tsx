export interface ExperienciaItemProps {
    principal: string
    label: string
}

export default function ExperienciaItem(props: ExperienciaItemProps) {
    return (
        <div className="flex flex-col items-center">
            <span className="text-green-700 text-3xl font-bold leading-6 text-center">{props.principal}</span>
            <span className="text-zinc-400 text-sm text-center">{props.label}</span>
        </div>
    )
}