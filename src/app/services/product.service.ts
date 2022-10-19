import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API = `http://localhost:8080/api/products`;
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${this.API}`);
  }
  getDetail(id: Number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${this.API}/${id}`);
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.httpClient.post<IProduct>(`${this.API}`, product);
  }
  removeProduct(id: Number): Observable<IProduct> {
    return this.httpClient.delete<IProduct>(`${this.API}/${id}`);
  }
  updateProduct(product: IProduct): Observable<IProduct> {
    return this.httpClient.put<IProduct>(`${this.API}/${product.id}`, product);
  }
  showHomePage(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${this.API}?_limit=6`);
  }
}
