// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-complaints',
//   styleUrl: './complaints.css',
//   templateUrl: './complaints.html',
// })
// export class Complaints {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-complaints',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './complaints.html',
  styleUrl: './complaints.css'
})
export class Complaints {

  complaintPageData = [
    {
      id: 'CMP001',
      flat: 'A-101',
      resident: 'Rajesh Nayak',
      subject: 'Water Leakage',
      description: 'Water leakage near bathroom.',
      date: '20 Sep 2026',
      priority: 'High',
      status: 'Open'
    },
    {
      id: 'CMP002',
      flat: 'A-102',
      resident: 'Abhi Kumar',
      subject: 'Lift Problem',
      description: 'Lift is not working properly.',
      date: '19 Sep 2026',
      priority: 'Medium',
      status: 'In Progress'
    },
    {
      id: 'CMP003',
      flat: 'A-103',
      resident: 'Binod Singh',
      subject: 'Street Light',
      description: 'Street light is not working.',
      date: '18 Sep 2026',
      priority: 'Low',
      status: 'Resolved'
    }
  ];

}