import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private readonly authService = inject(AuthService)
  registerData!: {}
  errorMessage! : string
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/)]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^(010|011|012|015)[0-9]{8}$/)])
  })

  submitRegisterForm() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      console.log(this.registerForm);
      this.registerData = this.registerForm.value
      this.authService.signUp(this.registerData).subscribe({
        next:(res)=>{
          console.log(res)
          if(res.message == "success"){
            //redirect to login
          }
        },
        error: (err)=>{
          console.log(err)
          this.errorMessage = err.error.message
        }
      })
    }
  }
}
