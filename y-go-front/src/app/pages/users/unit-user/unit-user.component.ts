import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BarModel } from '../../../models/bar.model';
import { UserModel } from '../../../models/user.model';
import { MatExpansionModule } from '@angular/material/expansion';
import { BarService } from '../../../services/bar.service';

import { RateModel } from '../../../models/rate.model';
import { RateService } from '../../../services/rate.service';
import { StarCountComponent } from '../../../components/star-count/star-count.component';
import { Router } from '@angular/router';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: `app-unit-user`,
  templateUrl: `./unit-user.component.html`,
  styleUrls: [`./unit-user.component.scss`],
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    StarCountComponent,
    MatListModule,
  ],
})
export class UnitUserComponent implements OnInit {
  @Input() user: UserModel | undefined;
  panelOpenState = false;
  barList: BarModel[] | undefined;
  rateList: RateModel[] | undefined;

  constructor(
    private barService: BarService,
    private router: Router,
    private rateService: RateService,
  ) {}

  ngOnInit() {
    this.barService.getBarsList().subscribe((barList) => {
      this.barList = barList;
    });
    this.rateService.getRateList().subscribe((rateList) => {
      this.rateList = rateList;
    });
  }

  getBarsCreatedByUser(): BarModel[] {
    return (
      this.barList?.filter((bar) => bar.createdBy?.id === this.user?.id) || []
    );
  }
  getBarsRatesByUser(): RateModel[] {
    return (
      this.rateList?.filter((rate) => rate.user?.id === this.user?.id) || []
    );
  }

  onDetailBar(id: string | undefined) {
    this.router.navigate([`/bars/detail/${id}`]);
  }
}
