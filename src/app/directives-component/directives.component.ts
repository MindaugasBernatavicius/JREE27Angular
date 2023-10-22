import { Component } from '@angular/core';
import { IProduct } from '../models/IProduct';

@Component({
  selector: 'app-directives',
  template: `
  <table *ngIf="products.length !== 0; else noProductsWarning" class="table table-striped">
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Count</th>
        <th scope="col">Price</th>
        <th scope="col">Json</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor='let product of products'>
        <td>{{ product.title | uppercase }}</td>
        <td>{{ product.count }}</td>
        <td>{{ product.price | currency : 'EUR' }}</td>
        <td>{{ product | json }}</td>
        <!-- <td>{{ JSON.stringify(product); }}</td> -->
      </tr>
    </tbody>
  </table>
  <!-- <p *ngIf="products.length === 0">There are no products</p> -->
  <ng-template #noProductsWarning>
    <p class="alert alert-warning">There are no products</p>
  </ng-template>
  `,
  styles: []
})
export class DirectivesComponent {
  products: Array<IProduct> = [
    { title: `Shoe A`, count: 150, price: 2.25 },
    { title: `ShoE B`, count: 200, price: 22.5 },
    { title: `Shoe C`, count: 75, price: 1 },
    { title: `Shoe D`, count: 75, price: 99 },
  ];

  // products: IProduct[] = [];
}
