import {
  Component,
  effect,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { BarModel } from '../../models/bar.model';
import { BarService } from '../../services/bar.service';
import { RateModel } from '../../models/rate.model';
import { RateService } from '../../services/rate.service';

@Component({
  selector: `app-accueil`,
  templateUrl: `./accueil.component.html`,
  styleUrls: [`./accueil.component.scss`],
})
export class AccueilComponent implements OnInit {
  public getMe: WritableSignal<UserModel | undefined> = signal(undefined);
  user: UserModel | undefined;
  users: UserModel[] | undefined;
  bars: BarModel[] | undefined;
  rates: RateModel[] | undefined;

  constructor(
    private userService: UserService,
    private barService: BarService,
    private rateService: RateService,
  ) {
    effect(
      async () => {
        const token = localStorage.getItem(`access_token`);
        const data = await this.userService.getMe(token!).toPromise();
        this.user = data;
        this.getMe.set(data);
      },
      { allowSignalWrites: true },
    );
  }

  async ngOnInit() {
    this.userService.getUsersList().subscribe((data) => {
      this.users = data;
    });

    this.barService.getBarsList().subscribe((data) => {
      this.bars = data;
    });

    this.rateService.getRateList().subscribe((data) => {
      this.rates = data;
    });
  }
}
