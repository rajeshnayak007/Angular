// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-notices',
//   styleUrl: './notices.css',
//   templateUrl: './notices.html',
// })
// export class Notices {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notices.html',
  styleUrl: './notices.css'
})
export class Notices {

  noticePageData = [
    {
      title: 'Water Supply Maintenance',
      description: 'Water supply will be temporarily unavailable.',
      priority: 'Important',
      date: '20 Sep 2026',
      time: '10:00 AM',
      category: 'Maintenance'
    },
    {
      title: 'Society Meeting',
      description: 'Monthly society meeting will be held this Sunday.',
      priority: 'Normal',
      date: '18 Sep 2026',
      time: '06:00 PM',
      category: 'Society'
    }
  ];

}