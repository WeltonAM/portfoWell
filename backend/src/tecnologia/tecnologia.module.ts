import { Module } from "@nestjs/common"
import { TecnologiaController } from "./tecnologia.controller"
import { DbModule } from "src/db/db.module"
import { TecnologiaPrisma } from "./tecnologia.prisma"

@Module({
	imports: [DbModule],
	controllers: [TecnologiaController],
	providers: [TecnologiaPrisma],
})
export class TecnologiaModule {}
