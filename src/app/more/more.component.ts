import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrl: './more.component.scss'
})
export class MoreComponent {
  constructor(public router: Router) { }

  isActive(route: string) {
    return this.router.isActive(route, { paths: 'exact', queryParams: 'exact', fragment: 'ignored', matrixParams: 'ignored' })
  }
}
