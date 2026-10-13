import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  fullName = '';
  email = '';
  mobile = '';
  flatNumber = '';
  password = '';
  confirmPassword = '';

  errorMessage = '';
  successMessage = '';

  constructor(private router: Router) {}

  registerUser(): void {

    this.errorMessage = '';
    this.successMessage = '';

    const normalizedEmail = this.email.trim().toLowerCase();

    if (
      !this.fullName.trim() ||
      !normalizedEmail ||
      !this.mobile.trim() ||
      !this.flatNumber.trim() ||
      !this.password ||
      !this.confirmPassword
    ) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      this.errorMessage = 'Please enter a valid email address.';
      return;
    }

    if (!/^\d{10}$/.test(this.mobile.trim())) {
      this.errorMessage = 'Enter a valid 10-digit mobile number.';
      return;
    }

    if (this.password.length < 8) {
      this.errorMessage = 'Password must contain at least 8 characters.';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    const existingData = localStorage.getItem('anarjUser');

    if (existingData) {
      const existingUser = JSON.parse(existingData);

      if (existingUser.email === normalizedEmail) {
        this.errorMessage = 'An account with this email already exists.';
        return;
      }
    }

    const user = {
      fullName: this.fullName.trim(),
      email: normalizedEmail,
      mobile: this.mobile.trim(),
      flatNumber: this.flatNumber.trim(),
      password: this.password
    };

    // Frontend demonstration only.
    // Do not store real passwords in browser storage.
    localStorage.setItem('anarjUser', JSON.stringify(user));

    this.successMessage = 'Registration successful! Please log in.';

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1000);
  }
}