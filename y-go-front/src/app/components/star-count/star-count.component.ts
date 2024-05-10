import { Component, input, InputSignal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-star-count',
  standalone: true,
  imports: [MatIconModule, NgForOf],
  templateUrl: './star-count.component.html',
  styleUrl: './star-count.component.scss',
})
export class StarCountComponent {
  public rateBar: InputSignal<number> = input.required();
}
