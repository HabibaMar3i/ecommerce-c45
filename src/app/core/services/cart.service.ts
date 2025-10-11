import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly _HttpClient = inject(HttpClient)
  private readonly _CookieService = inject(CookieService)

  token = this._CookieService.get('token')

  getUserCart():Observable<any>{
    return this._HttpClient.get(environment.baseURL + "cart", {headers: {token: this._CookieService.get('token')}})
  }
}
