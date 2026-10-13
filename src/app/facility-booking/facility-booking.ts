// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-facility-booking',
//   styleUrl: './facility-booking.css',
//   templateUrl: './facility-booking.html',
// })
// export class FacilityBooking {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-facility-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './facility-booking.html',
  styleUrl: './facility-booking.css'
})
export class FacilityBooking {

  facilitiesBooking = [
    {
      name: 'Community Hall',
      status: 'Available',
      location: 'Ground Floor',
      capacity: '100 People',
      price: '₹1,000 / Day',
      icon: '🏛️',
      class: 'facility-blue'
    },
    {
      name: 'Swimming Pool',
      status: 'Available',
      location: 'Block A',
      capacity: '30 People',
      price: '₹500 / Day',
      icon: '🏊',
      class: 'facility-green'
    },
    {
      name: 'Gym',
      status: 'Available',
      location: 'Block B',
      capacity: '25 People',
      price: '₹300 / Day',
      icon: '🏋️',
      class: 'facility-yellow'
    }
  ];

  bookFacilityPage(name: string) {
    alert(`Booking ${name}`);
  }

}