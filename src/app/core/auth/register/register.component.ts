import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/)]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^(010|011|012|015)[0-9]{8}$/)])
  })

  submitForm() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      console.log(this.registerForm);
    }
  }
}
