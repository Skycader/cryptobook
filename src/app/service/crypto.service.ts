import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  encrypt(value: string, password: string): string {
    return CryptoJS.AES.encrypt(value, password.trim()).toString();
  }

  decrypt(textToDecrypt: string, password: string) {
    try {
      let a = CryptoJS.AES.decrypt(textToDecrypt, password.trim());
      return a.toString(CryptoJS.enc.Utf8);
    } catch (e) {
      return null;
    }
  }
}
