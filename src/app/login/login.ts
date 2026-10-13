import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  loginUser(): void {

    this.errorMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter your email and password.';
      return;
    }

    const savedUser = localStorage.getItem('anarjUser');

    if (!savedUser) {
      this.errorMessage = 'Account not found. Please register first.';
      return;
    }

    const user = JSON.parse(savedUser);

    if (
      user.email === this.email.trim().toLowerCase() &&
      user.password === this.password
    ) {

      sessionStorage.setItem('anarjLoggedIn', 'true');

      this.router.navigate(['/home']);

    } else {

      this.errorMessage = 'Invalid email or password.';

    }
  }
}