import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainService } from '../../service/main.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  public mainService = inject(MainService);

  public login() {
    this.mainService.loggedIn = true;
  }
}
