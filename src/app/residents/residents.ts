// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-residents',
//   styleUrl: './residents.css',
//   templateUrl: './residents.html',
// })
// export class Residents {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-residents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './residents.html',
  styleUrl: './residents.css'
})
export class Residents {

  residents = [
    {
      flat: 'A-101',
      initials: 'RN',
      name: 'Rajesh Nayak',
      phone: '9876543210',
      email: 'rajesh@example.com',
      family: 4,
      type: 'Owner',
      status: 'Active'
    },
    {
      flat: 'A-102',
      initials: 'AB',
      name: 'Abhi Kumar',
      phone: '9876543211',
      email: 'abhi@example.com',
      family: 3,
      type: 'Tenant',
      status: 'Active'
    },
    {
      flat: 'A-103',
      initials: 'BS',
      name: 'Binod Singh',
      phone: '9876543212',
      email: 'binod@example.com',
      family: 5,
      type: 'Owner',
      status: 'Active'
    }
  ];

}