import { Component, } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.scss']
})
export class CamaraComponent {
  constructor(private router: Router) { }
  goMain() {
    this.router.navigate(['/mainView']);
  }
}
