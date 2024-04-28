import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuValue:boolean = false;
  menu_icon = 'bx bx-menu-alt-right';

  openMenu() {
    this.menuValue =! this.menuValue;
    this.menu_icon = this.menuValue ? 'bx bx-x' : 'bx bx-menu-alt-right';
  }

  closeMenu() {
    this.menuValue = false;
    this.menu_icon = 'bx bx-menu-alt-right';
  }
}
