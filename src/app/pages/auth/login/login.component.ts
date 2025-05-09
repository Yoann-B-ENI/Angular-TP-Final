import { Component, inject } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApiResponse } from '../../../models/auth-api-response';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = new FormGroup({​
    email: new FormControl('isaac@gmail.com', [Validators.required, Validators.email]),​
    password: new FormControl('password', [Validators.required, Validators.minLength(4)])​
  });​

  private readonly authService: AuthService = inject(AuthService)

  tryToLogin() {
    this.authService.tryToLoginObserved(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
  }

}
