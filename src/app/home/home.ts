// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-home',
//   styleUrl: './home.css',
//   templateUrl: './home.html',
// })
// export class Home {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  stats = [
    {
      title: 'Total Residents',
      value: '256',
      subtitle: 'Families Living',
      icon: '👥',
      class: 'blue'
    },
    {
      title: 'Occupied Flats',
      value: '212',
      subtitle: 'Currently Occupied',
      icon: '▣',
      class: 'green'
    },
    {
      title: 'Pending Payments',
      value: '12',
      subtitle: 'Awaiting payment',
      icon: '₹',
      class: 'orange'
    },
    {
      title: 'Open Complaints',
      value: '8',
      subtitle: 'Need attention',
      icon: '!',
      class: 'purple'
    }
  ];

  notices = [
    {
      title: 'Water Supply Maintenance',
      description: 'Water supply will be unavailable tomorrow.',
      time: '2 hours ago',
      icon: '💧',
      type: 'warning'
    },
    {
      title: 'Society Meeting',
      description: 'Monthly society meeting this Sunday.',
      time: '1 day ago',
      icon: '📢',
      type: 'normal'
    }
  ];

  facilities = [
    {
      name: 'Community Hall',
      status: 'Available',
      icon: '🏛️',
      class: 'facility-blue'
    },
    {
      name: 'Swimming Pool',
      status: 'Available',
      icon: '🏊',
      class: 'facility-green'
    },
    {
      name: 'Gym',
      status: 'Available',
      icon: '🏋️',
      class: 'facility-yellow'
    }
  ];

  activities = [
    {
      text: 'Maintenance payment completed',
      date: 'Today',
      icon: '✓',
      class: 'green'
    },
    {
      text: 'Community Hall booked',
      date: 'Yesterday',
      icon: '📅',
      class: 'blue'
    }
  ];

  viewAll(section: string) {
    console.log('View:', section);
  }

  bookFacility(name: string) {
    console.log('Booking:', name);
  }

}