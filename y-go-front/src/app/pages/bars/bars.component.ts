import {Component, OnInit} from "@angular/core"
import {BarService} from "../../services/bar.service";
import {BarModel} from "../../models/bar.model";

@Component({
  selector: `app-bars`,
  templateUrl: `./bars.component.html`,
  styleUrls: [`./bars.component.scss`],
})
export class BarsComponent implements OnInit{
  barList: BarModel[]|undefined;

  constructor(
    private barService: BarService,
  ) {
  }
  ngOnInit() {
    this.barService.getBarsList().subscribe(barList => this.barList = barList);
    console.log(this.barList)
  }
}
