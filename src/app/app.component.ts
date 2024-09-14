import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cryptobook';
  value = '';
  password = '';
  constructor() {}

  encrypt(value: string): string {
    return CryptoJS.AES.encrypt(value, this.password.trim()).toString();
  }

  decrypt(textToDecrypt: string) {
    let a = CryptoJS.AES.decrypt(textToDecrypt, this.password.trim());
    console.log(a);
    return a.toString(CryptoJS.enc.Utf8);
  }
}
