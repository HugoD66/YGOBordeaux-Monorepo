import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { SnackbarService } from '../../../components/snackbar/snackbar.component';
import { LogoYGoComponent } from '../../../components/logo-ygo/logo-ygo.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    LogoYGoComponent,
  ],
})
export class ForgotPasswordComponent {
  registerForm: FormGroup;
  hide = true;
  hideVerify = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBarService: SnackbarService,
  ) {
    this.registerForm = this.fb.group({
      email: [``, [Validators.required, Validators.email]],
      password: [``, [Validators.required, Validators.minLength(6)]],
      verifyPassword: [``, [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(`userData :`, this.registerForm.value);
      this.router.navigate([`/login`]);
      this.snackBarService.openSnackBar(
        `Un email de vérification vous a été envoyé !`,
        `Fermer`,
      );
    }
  }

  goHome() {
    this.router.navigate([`/`]);
  }
}
