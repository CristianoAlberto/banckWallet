import { Component } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss'
})
export class ActivityComponent {
  historicoSelected: boolean = true;
  pendentesSelected: boolean = false;

  selectButton(buttonType: string) {
    if (buttonType === 'historico') {
      this.historicoSelected = true;
      this.pendentesSelected = false;
    } else if (buttonType === 'pendentes') {
      this.historicoSelected = false;
      this.pendentesSelected = true;
    }
  }
}
