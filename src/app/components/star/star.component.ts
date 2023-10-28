import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
  @Input() rating = 0;
  starWidth = 0;

  ngOnChanges(): void {
    // this.starWidth = this.rating * 75 / 5;
    this.starWidth = this.rating * 110 / 5;
  }
}
