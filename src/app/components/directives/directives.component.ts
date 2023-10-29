import { Component, ViewChild } from '@angular/core';
import { IProduct } from '../../models/IProduct';
import { ProductService } from 'src/app/services/product.service';
import { NgForm } from '@angular/forms';

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
        <th scope="col">Actions</th>
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
        <td><button (click)="deleteProduct(product.id)" class="btn btn-danger">DELETE</button></td>
      </tr>
    </tbody>
  </table>
  <!-- <p *ngIf="products.length === 0">There are no products</p> -->
  <ng-template #noProductsWarning>
    <p class="alert alert-warning">There are no products</p>
  </ng-template>
  <p *ngIf="deleteError" class="alert alert-warning">Error deleting product</p>
  <p *ngIf="createError" class="alert alert-warning">Error creating product, all fields must be valid</p>

  <br>
    <form #productForm="ngForm">
      <div class="form-group">
        <label for="pn">Product name:</label>
        <input name="title" type="text" class="form-control" id="pn" ngModel required>
        <div [hidden]="!(!productForm.valid
            && productForm.touched
            && productForm.value.title === '')"
            class="alert alert-danger">
          Please don't leave the value empty
        </div>
      </div>
      <div class="form-group">
        <label for="pc">Product count:</label>
        <input name="count" type="number" class="form-control" id="pc" ngModel min="0" max="999">
        <div [hidden]="!(!productForm.valid
            && productForm.touched
            && (productForm.value.count < 0 || productForm.value.count > 999))"
            class="alert alert-danger">
          Count is outside of valid range: 0-999
        </div>
      </div>
      <button (click)="createProduct()" type="submit" class="btn btn-primary">Submit</button>
    </form>
    <!-- {{ productForm.value | json }}
    {{ productForm.valid }} -->
  <br>
  `,
  styles: []
})
export class DirectivesComponent {
  // products: IProduct[] = [];
  products: Array<IProduct> = [];
  filteredProducts: Array<IProduct> = [];
  deleteError: boolean = false;
  createError: boolean = false;
  // new version
  @ViewChild('productForm') private productForm!: NgForm;

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

  deleteProduct(id: number): void {
    this.ps.deleteProductById(id).subscribe({
      next: () => {
        this.ps.getProducts().subscribe({
          next: (res) => {
            this.products = res;
            this.filteredProducts = this.products;
          },
          error: (err) => console.error(err)
        });
        this.filteredProducts = this.products;
        this.deleteError = false;
      },
      error: (err) => {
        console.error("err: " + err);
        this.deleteError = true;
      }
    });
  }

  validateProduct(p: IProduct): Boolean {
    // if ('title' in p && 'count' in p && p.title !== "" && p.count > 0)
    //   return true;
    // return false;
    return true;
  }

  createProduct(): void {
    let newProduct: IProduct = this.productForm.value;

    // ... one way to perform validation is a custom method on the object
    if (this.productForm.valid && this.validateProduct(newProduct)) {
      this.ps.createProduct(newProduct).subscribe({
        next: () => {
          this.ps.getProducts().subscribe({
            next: (res) => {
              this.products = res;
              this.filteredProducts = this.products;
            },
            error: (err) => console.error(err)
          });
          this.filteredProducts = this.products;
        },
        error: (err) => console.error("err: " + err)
      });
      this.productForm.resetForm();
      this.createError = false;
    } else {
      this.createError = true;
    }
  }

  ngOnDestroy(): void { }
}
