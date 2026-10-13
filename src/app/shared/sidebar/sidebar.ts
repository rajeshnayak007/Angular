// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-sidebar',
//   styleUrl: './sidebar.css',
//   templateUrl: './sidebar.html',
// })
// export class Sidebar {}


import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

}