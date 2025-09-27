import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _httpClient = inject(HttpClient)
  private readonly cookieService = inject(CookieService)
  private readonly router = inject(Router)


  signUp(registerData: {}):Observable<any>{
    return this._httpClient.post(environment.baseURL + 'auth/signup', registerData)
  }

  signIn(loginData: {}):Observable<any>{
    return this._httpClient.post(environment.baseURL + 'auth/signin', loginData)
  }

  signOut():void{
    this.cookieService.delete('token')
    this.router.navigate(['/login'])
  }
}
