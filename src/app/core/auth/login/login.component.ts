import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)
  loading: boolean = false
  showPassword: boolean = false
  registerData!: {}
  errorMessage! : string
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/)])
  })

  submitLoginForm() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      console.log(this.loginForm);
      this.registerData = this.loginForm.value
      this.loading = true
      this.authService.signIn(this.registerData).subscribe({
        next:(res)=>{
          this.loading = false
          console.log(res)
          if(res.message == "success"){
            this.errorMessage = ''
            this.loading = false
            this.router.navigate(['./home'])
          }
        },
        error: (err)=>{
          console.log(err)
          this.errorMessage = err.error.message
          this.loading = false
        }
      })
    }
  }
}
