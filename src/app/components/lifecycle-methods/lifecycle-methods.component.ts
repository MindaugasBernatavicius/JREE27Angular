import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle-methods',
  templateUrl: './lifecycle-methods.component.html',
  styleUrls: ['./lifecycle-methods.component.css']
})
export class LifecycleMethodsComponent {
  constructor() {
    console.log(`constructor()!`);
  }

  ngOnInit(): void {
    console.log(`ngOnInit()!`);
  }

  ngOnDestroy(): void {
    console.log(`ngOnDestroy()!`);
  }
}
