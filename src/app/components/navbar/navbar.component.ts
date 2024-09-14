import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainService } from '../../service/main.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  public logout() {
    this.mainService.loggedIn = false;
    this.mainService.password = '';
  }

  constructor(private mainService: MainService) {}
}
