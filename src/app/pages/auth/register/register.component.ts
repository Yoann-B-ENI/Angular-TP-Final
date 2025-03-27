import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registrationForm = new FormGroup({
    email: new FormControl('yoann@gmail.com', [Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(128)]),​
    username: new FormControl('yoyo', [Validators.required, Validators.minLength(4), Validators.maxLength(128)])​, 
    password: new FormControl('password', [Validators.required, Validators.minLength(4), Validators.maxLength(128)]), 
    phoneNumber: new FormControl('0601020304', [Validators.required, Validators.minLength(10), Validators.maxLength(10)])​, 
    zipCode: new FormControl('44000', [Validators.required, Validators.minLength(5), Validators.maxLength(5)])​, 
    cityName: new FormControl('Nantes', [Validators.required, Validators.minLength(4), Validators.maxLength(128)])​, 
  })
  

  tryToRegister() {
  throw new Error('Method not implemented.');
  }

}
