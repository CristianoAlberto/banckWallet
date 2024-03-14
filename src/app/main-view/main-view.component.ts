import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InactivityService } from '../service/inactivity.service';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss'
})
export class MainViewComponent {
  emptyCardState: boolean = false;
  constructor(private router: Router) { }
  goToCamara() {
    this.router.navigate(['/camara']);
  }
  checkEmptyCard(): void {
    const activeSlide = document.querySelector('.carousel-item.active');
    const emptyCard = activeSlide?.querySelector('.emptyCard');
    this.emptyCardState = emptyCard ? true : false;
  }
}
