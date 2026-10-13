// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-maintenance',
//   styleUrl: './maintenance.css',
//   templateUrl: './maintenance.html',
// })
// export class Maintenance {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './maintenance.html',
  styleUrl: './maintenance.css'
})
export class Maintenance {

  maintenanceBills = [
    {
      id: 'B001',
      flat: 'A-101',
      month: 'September 2026',
      amount: '₹2,500',
      dueDate: '10 Sep 2026',
      status: 'Paid'
    },
    {
      id: 'B002',
      flat: 'A-102',
      month: 'September 2026',
      amount: '₹2,500',
      dueDate: '10 Sep 2026',
      status: 'Pending'
    },
    {
      id: 'B003',
      flat: 'A-103',
      month: 'September 2026',
      amount: '₹2,500',
      dueDate: '10 Sep 2026',
      status: 'Overdue'
    }
  ];

}