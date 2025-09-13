import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly httpClient = inject(HttpClient)

  getAllProducts(pageNumber:number = 1):Observable<any>{
    return this.httpClient.get(environment.baseURL + 'products' + '?page=' + pageNumber)
  }

  getSpecificProduct(id: string):Observable<any>{
    return this.httpClient.get(environment.baseURL + 'products/' + id)
  }
}
