import useLocalStorage from "./useLocalStorage"
import Mensagem from "@/model/Mensagem"
import conversar from "@/functions/chat"
import { useState } from "react"

export default function useChat() {
	function gerarId(): string {
		const p1 = Math.random().toString(36).substring(2, 9)
		const p2 = Math.random().toString(36).substring(2, 9)
		const p3 = Math.random().toString(36).substring(2, 9)
		return `${p1}-${p2}-${p3}`
	}

	const [chatId] = useLocalStorage<string>("chatId", gerarId())
	const [mensagens, setMensagens] = useLocalStorage<Mensagem[]>(`mensagens-${chatId}`, [])
	const [pensando, setPensando] = useState<boolean>(false)

	async function adicionarMensagem(texto: string) {
		try {
			setPensando(true)
			const novaMensagem: Mensagem = {
				id: gerarId(),
				texto,
				autor: "Visitante",
				lado: "direito",
			}

			setMensagens((msgs) => [...msgs, novaMensagem])

			const resposta = await conversar(chatId, novaMensagem)

			if (!resposta) return

			const mensagemResposta: Mensagem = {
				id: gerarId(),
				texto: resposta,
				autor: "Assistente",
				lado: "esquerdo",
			}

			setMensagens((msgs) => [...msgs, mensagemResposta])
		} finally {
			setPensando(false)
		}
	}

	function limparMensagens() {
		setMensagens([])
	}

	return {
		chatId,
		mensagens,
		pensando,
		adicionarMensagem,
		limparMensagens,
	}
}
