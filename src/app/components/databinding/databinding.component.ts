import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  template: `
    <p>{{name + "----" + getString()}}</p>
    <p>{{ 1 + 2 }}</p>

    <hr>
    <p *ngIf="showMsg">{{ counter }}</p>
    <button (click)="incrementCounter($event)" class="btn btn-outline-primary">
      Counter++
    </button>
    &nbsp;
    <button (click)="toggleCounterVis()" class="btn btn-outline-primary">
      {{ this.showMsg ? "Hide" : "Show" }} Counter
    </button>

    <hr>
    <input [(ngModel)]='text'>
    <input [(ngModel)]='text'>
    <input [ngModel]='text'> <!-- this is only properting binding, not two way binding -->
  `,
  styles: [],
})
export class DatabindingComponent {
  name = 'John'
  counter = 0;
  showMsg = true;
  text = ``

  incrementCounter($event: MouseEvent): void {
    console.log($event);
    this.counter += 1;
  }

  // toggleCounterVis(): void {
  //   // this.showMsg = false;

  //   // if (this.showMsg === true)
  //   //   this.showMsg = false;
  //   // else
  //   //   this.showMsg = true;

  //   // this.showMsg = this.showMsg ? false : true;
  //   this.showMsg = !this.showMsg;
  // }

  toggleCounterVis = (): void => { this.showMsg = !this.showMsg; }

  getString(): string {
    console.log(">>>>>");
    return `!!!`
  }
}
