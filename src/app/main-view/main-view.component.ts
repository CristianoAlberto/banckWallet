import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss'
})
export class MainViewComponent {
  constructor(private router: Router) { }
  goToCamara() {
    this.router.navigate(['/camara']);
  }
}
