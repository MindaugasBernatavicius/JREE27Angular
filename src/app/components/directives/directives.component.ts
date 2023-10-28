import { Component } from '@angular/core';
import { IProduct } from '../../models/IProduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-directives',
  template: `
  <label>Filter:</label>
  &nbsp;
  <input type="text" (input)="onFilter($event)">
  <br>
  <table *ngIf="filteredProducts.length !== 0; else noProductsWarning" class="table table-striped">
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Count</th>
        <th scope="col">Price</th>
        <th scope="col">Rating</th>
        <th scope="col">Json</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor='let product of filteredProducts'>
        <td>{{ product.title | uppercase }}</td>
        <td>{{ product.count }}</td>
        <td>{{ product.price | currency : 'EUR' }}</td>
        <td><app-star [rating]="product.rating"></app-star></td>
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
  // products: IProduct[] = [];
  products: Array<IProduct> = [];
  filteredProducts: Array<IProduct> = [];

  constructor(private ps: ProductService) { }

  ngOnInit(): void {
    this.ps.getProducts().subscribe({
      next: (res) => {
        this.products = res;
        this.filteredProducts = this.products;
      },
      error: (err) => console.error(err)
    });
    this.filteredProducts = this.products;
  }

  onFilter($event: any): void {
    let filterString = $event.target.value.toLocaleLowerCase();
    this.filteredProducts = filterString !== ""
      ? this.products.filter(p => p.title.toLocaleLowerCase().includes(filterString))
      : this.products;
  }

  ngOnDestroy(): void { }
}
