import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BarService} from "../../../services/bar.service";
import {BarModel} from "../../../models/bar.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-detail-bars',
  templateUrl: './detail-bar.component.html',
  styleUrls: ['./detail-bar.component.scss']
})
export class DetailBarComponent implements OnInit {
  bar: Observable<BarModel | undefined>;
  constructor(
    private route: ActivatedRoute,
    private barService: BarService,
  ) {
    this.bar = this.barService.getBarById(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {

  }

}
