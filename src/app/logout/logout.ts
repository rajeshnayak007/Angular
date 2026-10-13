// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-logout',
//   styleUrl: './logout.css',
//   templateUrl: './logout.html',
// })
// export class Logout {}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css'
})
export class Logout {

  logoutPageData = {
    title: 'Are you sure you want to logout?',
    message: 'You will need to login again to access your account.'
  };

  constructor(private router: Router) {}

  cancelLogout() {
    this.router.navigate(['/home']);
  }

  confirmLogout() {
    this.router.navigate(['/home']);
  }

}