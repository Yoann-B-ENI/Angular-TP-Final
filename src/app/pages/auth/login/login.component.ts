import { Component, inject } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: String = "Email"
  password: String = ""
  loginForm = new FormGroup({​
    email: new FormControl('Email', [Validators.required, Validators.email]),​
    password: new FormControl('', [Validators.required, Validators.minLength(4)])​
  });​

  private readonly authService: AuthService = inject(AuthService)

  tryToLogin() {
    console.log(this.loginForm.controls.email.value)
    console.log(this.loginForm.controls.password.value)
  }

}
