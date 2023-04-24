import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navigate-bar',
  templateUrl: './navigate-bar.component.html',
  styleUrls: ['./navigate-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigateBarComponent {
  isMenuOpen = false;
  toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}
}
