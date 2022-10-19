import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../models/category';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  API = `https://jsonserver-nine.vercel.app/api/categories`;
  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(`${this.API}`);
  }
  getCategory(id: Number): Observable<ICategory> {
    return this.httpClient.get<ICategory>(`${this.API}/${id}`);
  }
  addCategory(category: ICategory): Observable<ICategory> {
    return this.httpClient.post<ICategory>(`${this.API}`, category);
  }
  removeCategory(id: Number): Observable<ICategory> {
    return this.httpClient.delete<ICategory>(`${this.API}/${id}`);
  }
  updateCategory(category: ICategory): Observable<ICategory> {
    return this.httpClient.put<ICategory>(
      `${this.API}/${category.id}`,
      category
    );
  }
  showRelationship(id: number): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(
      `${this.API}/${id}?_embed=products`
    );
  }
}
