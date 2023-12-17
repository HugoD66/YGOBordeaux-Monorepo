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
  filteredBarList: BarModel[] = [];

  constructor(
    private barService: BarService,
  ) {
  }
  ngOnInit() {
    this.barService.getBarsList().subscribe(barList => {
      this.barList = barList;
      this.filteredBarList = barList;
    });
  }

  onSearch(value: string) {
    if (this.barList) {
      if (value) {
        this.filteredBarList = this.barList.filter(bar =>
          bar?.name?.toLowerCase().includes(value.toLowerCase())
        );
      } else {
        this.filteredBarList = this.barList;
      }
    }
  }
}
