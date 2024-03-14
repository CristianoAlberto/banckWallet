import { Component } from '@angular/core';
import { InactivityService } from './service/inactivity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'banckWallet';
  constructor(private inactivityService: InactivityService) { }
}
