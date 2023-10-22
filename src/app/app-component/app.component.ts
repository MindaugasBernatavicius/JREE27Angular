import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <app-header></app-header>
  <div class="container">
    <!-- <h2>Hello Angular!!!</h2> -->
    <!-- <app-databinding></app-databinding> -->
    <!-- <app-directives></app-directives> -->
    <router-outlet></router-outlet>
  </div>
  <!-- <app-footer></app-footer> -->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JREE27Angular !!';
}
