import { Module } from "@nestjs/common"
import { BarsService } from "./bars.service"
import { BarsController } from "./bars.controller"
import {TypeOrmModule} from "@nestjs/typeorm";
import {Bar} from "./entities/bar.entity";
import {BarFixtures} from "../fixtures/bar.fixtures";
import {PictureListService} from "../picture-list/picture-list.service";
import {PictureListModule} from "../picture-list/picture-list.module";
import {GeoModule} from "../geo/geo.module";

@Module({
  imports: [TypeOrmModule.forFeature([Bar]), PictureListModule, GeoModule],
  controllers: [BarsController],
  providers: [BarFixtures, BarsService],
  exports: [BarsService],
})
export class BarsModule {}
