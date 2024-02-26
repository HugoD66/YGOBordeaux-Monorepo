import { Component, Input, OnChanges } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import { UserModel } from '../../../../models/user.model';

import { ButtonUnitHorizComponent } from '../../../../components/button-panel/button-panel-horiz/button-unit-horiz/button-unit-horiz.component';
import { Observable, Observer } from 'rxjs';
import { MatTabsModule } from '@angular/material/tabs';
import { AsyncPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

export interface PresentationTab {
  label: string;
  firstTab: boolean;
  secondTab: boolean;
  thirdTab: boolean;
}

@Component({
  selector: `app-accueil-nav`,
  templateUrl: `./accueil-nav.component.html`,
  styleUrls: [`./accueil-nav.component.scss`],
  standalone: true,

  imports: [
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    RouterLinkActive,
    RouterLink,
    ButtonUnitHorizComponent,
    MatTabsModule,
    AsyncPipe,
    MatIconModule,
  ],
})
export class AccueilNavComponent implements OnChanges {
  isAuthenticated = false;
  routerLinkProfile: string = ``;
  @Input() user!: UserModel | undefined;
  asyncTabs: Observable<PresentationTab[]>;
  firstLabel = `../../../../../assets/icons/wine-count.png`;
  secondLabel = `../../../../../assets/icons/student.png`;
  thirdLabel = `../../../../../assets/icons/register.png`;

  constructor(
    private userService: UserService,
    private router: Router,
  ) {
    this.asyncTabs = new Observable((observer: Observer<PresentationTab[]>) => {
      setTimeout(() => {
        observer.next([
          {
            label: `Ygo`,
            firstTab: true,
            secondTab: false,
            thirdTab: false,
          },
          {
            label: `Ynov`,
            firstTab: false,
            secondTab: true,
            thirdTab: false,
          },
          {
            label: `Rejoignez-nous`,
            firstTab: false,
            secondTab: false,
            thirdTab: true,
          },
        ]);
      }, 500);
    });
  }

  ngOnChanges(): void {
    if (this.user) {
      console.log(this.user);
      this.isAuthenticated = true;
      this.routerLinkProfile = `users/detail/${this.user.id}`;
    } else {
      this.isAuthenticated = false;
    }
  }

  onLogout(): void {
    this.userService.logout();
    this.isAuthenticated = false;
    this.router.navigateByUrl(`/`);
  }

  navigateToProfile(): void {
    if (this.user?.id) {
      this.routerLinkProfile = `users/detail/${this.user.id}`;
      this.router.navigate([this.routerLinkProfile]);
    }
  }
}
