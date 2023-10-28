import { Injectable } from '@angular/core';
import { IProduct } from '../models/IProduct';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsUrl = `http://localhost:3000/products`

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Array<IProduct>> {
    // curl -X GET http://localhost:3000/products
    return this.httpClient.get<Array<IProduct>>(this.productsUrl);
  }

  getProductById(id: number): Observable<IProduct> {
    // curl -X GET http://localhost:3000/products/2
    return this.httpClient.get<IProduct>(`${this.productsUrl}/${id}`);
  }
}


// return [
//   { title: `Addidas`, count: 150, price: 2.25, rating: 3.75 },
//   { title: `Nike`, count: 200, price: 22.5, rating: 2.5 },
//   { title: `Rebook`, count: 75, price: 12, rating: 1.33 },
//   { title: `Balenciaga`, count: 75, price: 99, rating: 4.80 },
// ];
