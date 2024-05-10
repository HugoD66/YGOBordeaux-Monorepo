import {
  Component,
  EventEmitter,
  input,
  Input,
  InputSignal,
  Output,
  signal,
  WritableSignal,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [MatIconModule, NgForOf],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss',
})
export class StarRatingComponent {
  public rating: WritableSignal<number> = signal(0);
  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();
  hoverState = 0;

  onStarEnter(starId: number): void {
    this.hoverState = starId;
  }

  onStarLeave(): void {
    this.hoverState = 0;
  }

  onStarClicked(starId: number): void {
    this.ratingChange.emit(starId);
  }
}
