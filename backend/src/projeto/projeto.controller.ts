import { Controller, Get, Param } from "@nestjs/common"
import { ProjetoPrisma } from "./projeto.prisma"
import { Projeto } from "@core"

@Controller("projetos")
export class ProjetoController {
	constructor(private readonly repo: ProjetoPrisma) {}

	@Get()
	obterTodos(): Promise<Projeto[]> {
		return this.repo.obterTodos()
	}

	@Get(":id")
	obterPorId(@Param("id") id: string): Promise<Projeto | null> {
		return this.repo.obterPorId(+id)
	}
}
