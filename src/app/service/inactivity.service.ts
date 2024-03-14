import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InactivityService {

  private inactivityTimeout: any;
  private readonly inactivityPeriod: number = 60000;

  constructor(private router: Router) {
    this.restartTimer();
    this.initEvents();
  }

  private initEvents(): void {
    window.addEventListener('mousemove', this.restartTimer.bind(this));
    window.addEventListener('keypress', this.restartTimer.bind(this));
    window.addEventListener('touchmove', this.restartTimer.bind(this));
  }

  private restartTimer(): void {
    clearTimeout(this.inactivityTimeout);
    this.inactivityTimeout = setTimeout(() => {
      this.router.navigate(['/login']);
    }, this.inactivityPeriod);
  }
}
