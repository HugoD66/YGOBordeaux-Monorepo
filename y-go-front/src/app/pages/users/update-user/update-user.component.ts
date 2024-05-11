import { Component, Input, input, signal, WritableSignal } from '@angular/core';
import { ButtonPanelHorizComponent } from '../../../components/button-panel/button-panel-horiz/button-panel-horiz.component';
import { LogoYGoComponent } from '../../../components/logo-ygo/logo-ygo.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { UserModel } from '../../../models/user.model';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [
    ButtonPanelHorizComponent,
    LogoYGoComponent,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss',
})
export class UpdateUserComponent {
  @Input() user: UserModel | null = null;
  public errorMessage: WritableSignal<string> = signal('');
  updateForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur',
    }),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  constructor(private userService: UserService) {}
  onSubmit() {
    console.log(this.updateForm.value);
    const email = this.updateForm.value.email;
    const name = this.updateForm.value.name;
    if (this.updateForm.valid && email != null && name != null) {
      const updatedUser: UserModel = {
        ...this.user,
        email,
        name,
      };
      this.userService.updateUser(updatedUser).subscribe({
        next: () => {
          this.errorMessage.set('');
          //this.goLogin();
        },
        error: (error) => {
          console.log(error);
          this.errorMessage.set(
            error || "Une erreur est survenue lors de l'inscription.",
          );
        },
      });
    } else {
      this.errorMessage.set('Tous les champs sont requis.');
    }
  }
}
