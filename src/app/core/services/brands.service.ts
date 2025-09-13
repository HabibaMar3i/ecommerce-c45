import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  private readonly _httpClient = inject(HttpClient);

  getAllBrands():Observable<any>{
    return this._httpClient.get(environment.baseURL + 'brands')
  }
}
