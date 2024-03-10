import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(public router: Router) { }

  isActive(route: string) {
    return this.router.isActive(route, { paths: 'exact', queryParams: 'exact', fragment: 'ignored', matrixParams: 'ignored' })
  }
}
