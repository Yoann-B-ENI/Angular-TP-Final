import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { newUser } from '../../../models/new-user';

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
  private readonly authService: AuthService = inject(AuthService)

  tryToRegister() {
    const newUser: newUser = {
      email: this.registrationForm.controls.email.value!,
      pseudo: this.registrationForm.controls.username.value!,
      password: this.registrationForm.controls.password.value!,
      passwordConfirm: this.registrationForm.controls.password.value!,
      phone: this.registrationForm.controls.phoneNumber.value!,
      cityCode: this.registrationForm.controls.zipCode.value!,
      city: this.registrationForm.controls.cityName.value!
    }
    this.authService.tryToRegisterObserved(newUser)
  }

}
