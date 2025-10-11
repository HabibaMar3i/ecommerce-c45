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

  headers: object = {
    headers: { token: this._CookieService.get('token'), },
  }

  getUserCart(): Observable<any> {
    return this._HttpClient.get(environment.baseURL + "cart", this.headers)
  }

  addToCart(productId: string): Observable<any> {
    return this._HttpClient.post(environment.baseURL + "cart", { productId: productId }, this.headers)
  }

  updateProductQuantity(count: number, productId: string): Observable<any> {
    return this._HttpClient.post(environment.baseURL + "cart" + "productId", { count: count }, this.headers)
  }

  deleteProduct(productId: string): Observable<any> {
    return this._HttpClient.delete(environment.baseURL + "cart" + "productId", this.headers)
  }

  clearCart(): Observable<any> {
    return this._HttpClient.delete(environment.baseURL + "cart", this.headers)
  }
}
