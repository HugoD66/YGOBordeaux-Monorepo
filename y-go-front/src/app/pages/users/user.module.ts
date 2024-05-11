import { NgModule } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { UnitBarComponent } from '../bars/unit-bar/unit-bar.component';
import { ButtonPanelHorizComponent } from '../../components/button-panel/button-panel-horiz/button-panel-horiz.component';
import { LogoYGoComponent } from '../../components/logo-ygo/logo-ygo.component';
import { UnitUserComponent } from './unit-user/unit-user.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { UpdateUserComponent } from './update-user/update-user.component';

@NgModule({
  declarations: [UsersComponent, DetailUserComponent],
  providers: [UserService],
  imports: [
    CommonModule,
    UnitBarComponent,
    ButtonPanelHorizComponent,
    LogoYGoComponent,
    UnitUserComponent,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    UpdateUserComponent,
  ],
})
export class UserModule {}
