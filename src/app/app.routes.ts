import { Routes } from '@angular/router';

import { Login } from './login/login';
import { Register } from './register/register';

import { Home } from './home/home';
import { Residents } from './residents/residents';
import { Maintenance } from './maintenance/maintenance';
import { FacilityBooking } from './facility-booking/facility-booking';
import { Payments } from './payments/payments';
import { Notices } from './notices/notices';
import { Complaints } from './complaints/complaints';
import { Profile } from './profile/profile';
import { Logout } from './logout/logout';

export const routes: Routes = [

  {
    path: 'login',
    component: Login
  },

  {
    path: 'register',
    component: Register
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: Home
  },

  {
    path: 'residents',
    component: Residents
  },

  {
    path: 'maintenance',
    component: Maintenance
  },

  {
    path: 'facility-booking',
    component: FacilityBooking
  },

  {
    path: 'payments',
    component: Payments
  },

  {
    path: 'notices',
    component: Notices
  },

  {
    path: 'complaints',
    component: Complaints
  },

  {
    path: 'profile',
    component: Profile
  },

  {
    path: 'logout',
    component: Logout
  },

  {
    path: '**',
    redirectTo: 'login'
  }

];