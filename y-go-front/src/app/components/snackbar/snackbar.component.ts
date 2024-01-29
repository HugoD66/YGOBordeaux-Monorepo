import { Component } from "@angular/core"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { MatButtonModule } from "@angular/material/button"
import { MatSnackBar } from "@angular/material/snack-bar"

@Component({
  selector: `app-snackbar`,
  templateUrl: `./snackbar.component.html`,
  styleUrls: [`./snackbar.component.scss`],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class SnackbarService {
  message = ``
  action = ``

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string, duration: number = 2000) {
    this._snackBar.open(message, action, {
      duration: duration,
    })
  }
}
