// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-profile',
//   styleUrl: './profile.css',
//   templateUrl: './profile.html',
// })
// export class Profile {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

  profilePageData = {
    name: 'Rajesh Nayak',
    role: 'Owner',
    email: 'rajesh@example.com',
    phone: '9876543210',
    flat: 'A-101',
    block: 'Block A',
    memberSince: '2024'
  };

}