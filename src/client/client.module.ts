import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm/dist/typeorm.module";
import { ClientEntity } from "./entity/client.entity";
import { ClientController } from "./client.controller";
import { ClientService } from "./client.service";

@Module({
  imports: [TypeOrmModule.forFeature([ClientEntity])],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
