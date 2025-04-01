import { Module } from "@nestjs/common"
import { ProjetoController } from "./projeto.controller"
import { DbModule } from "src/db/db.module"
import { ProjetoPrisma } from "./projeto.prisma"
import { TecnologiaPrisma } from "src/tecnologia/tecnologia.prisma"

@Module({
	providers: [ProjetoPrisma],
	controllers: [ProjetoController],
	imports: [DbModule],
})
export class ProjetoModule {}
