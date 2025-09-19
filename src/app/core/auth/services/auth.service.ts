import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _httpClient = inject(HttpClient)

  signUp(registerData: {}):Observable<any>{
    return this._httpClient.post(environment.baseURL + 'auth/signup', registerData)
  }
}
