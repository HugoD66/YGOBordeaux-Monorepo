import { Module } from "@nestjs/common"
import { BarsService } from "./bars.service"
import { BarsController } from "./bars.controller"
import {TypeOrmModule} from "@nestjs/typeorm";
import {Bar} from "./entities/bar.entity";
import {BarFixtures} from "../fixtures/bar.fixtures";

@Module({
  imports: [TypeOrmModule.forFeature([Bar])],
  controllers: [BarsController],
  providers: [BarFixtures, BarsService],
  exports: [BarsService],
})
export class BarsModule {}
