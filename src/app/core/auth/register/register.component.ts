import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)
  registerData!: {}
  errorMessage!: string
  loading: boolean = false
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/)]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^(010|011|012|015)[0-9]{8}$/)])
  }, { validators: this.confirmPassword.bind(this) })

  confirmPassword(group: AbstractControl) {
    let password = group.get('password')?.value
    let rePassword = group.get('rePassword')?.value
    if (password === rePassword) {
      return null
    } else {
      return { mismatch: true }
    }
  }

  submitRegisterForm() {
    if (this.registerForm.valid) {
    this.loading = true
      console.log(this.registerForm.value);
      console.log(this.registerForm);
      this.registerData = this.registerForm.value
      this.authService.signUp(this.registerData).subscribe({
        next: (res) => {
          this.loading = false
          console.log(res)
          if (res.message == "success") {
            this.registerForm.reset()
            this.router.navigate(['./login'])
            this.loading = false
          }
        },
        error: (err) => {
          this.loading = false
          console.log(err)
          this.errorMessage = err.error.message
          if (this.errorMessage === 'Account Already Exists') {
            setTimeout(() => {
              this.router.navigate(['./login'])
              this.registerForm.reset()
            }, 2000)
          }
        }
      })
    }
  }
}