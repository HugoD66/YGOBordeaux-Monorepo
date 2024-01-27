import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: `app-search-bars`,
  templateUrl: `./search-bar.component.html`,
  styleUrls: [`./search-bar.component.scss`],
})
export class SearchBarComponent {
  @Output() searchEvent = new EventEmitter<string>();
  value = ``;

  onSearchChange(searchValue: string): void {
    this.searchEvent.emit(searchValue);
  }
  resetSearch(): void {
    this.value = ``;
    this.onSearchChange(this.value);
  }
}
