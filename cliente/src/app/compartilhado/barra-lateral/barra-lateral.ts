import { Component } from '@angular/core';

@Component({
  selector: 'app-barra-lateral-cmp',
  templateUrl: 'barra-lateral.html'
})
export class BarraLateralComponent {
  isActive = false;
  showMenu = '';
  eventCalled() {
    this.isActive = !this.isActive;
  }
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
}
