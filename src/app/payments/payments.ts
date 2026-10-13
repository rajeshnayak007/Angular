// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-payments',
//   styleUrl: './payments.css',
//   templateUrl: './payments.html',
// })
// export class Payments {}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payments.html',
  styleUrl: './payments.css'
})
export class Payments {

  payments = [
    {
      id: 'PAY001',
      flat: 'A-101',
      resident: 'Rajesh Nayak',
      month: 'September',
      amount: '₹2,500',
      date: '05 Sep 2026',
      method: 'UPI',
      status: 'Paid'
    },
    {
      id: 'PAY002',
      flat: 'A-102',
      resident: 'Abhi Kumar',
      month: 'September',
      amount: '₹2,500',
      date: '-',
      method: '-',
      status: 'Pending'
    },
    {
      id: 'PAY003',
      flat: 'A-103',
      resident: 'Binod Singh',
      month: 'August',
      amount: '₹2,500',
      date: '-',
      method: '-',
      status: 'Overdue'
    }
  ];

  makePayment(flat: string) {
    alert(`Payment for ${flat}`);
  }

}