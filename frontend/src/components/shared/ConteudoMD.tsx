import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export interface ConteudoMDProps {
    conteudo: string;
}

export default function ConteudoMD(props: ConteudoMDProps) {
    return (
        <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} skipHtml={false}>
            {props.conteudo}
        </Markdown>
    )
}