import { NgModule } from '@angular/core';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SnackbarService } from '../../components/snackbar/snackbar.component';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  providers: [SnackbarService],
  imports: [
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    HttpClientModule,
    MatInputModule,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,
  ],
})
export class SecurityModule {}
