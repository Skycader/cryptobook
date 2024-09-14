import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CryptoService } from '../../service/crypto.service';
import { MainService } from '../../service/main.service';

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.scss',
})
export class AddNoteComponent {
  public value = '';

  constructor(
    private mainService: MainService,
    private cryptoService: CryptoService
  ) {}

  public addNote() {
    this.mainService.addNote({
      id: Date.now().toString(),
      title: this.cryptoService.encrypt(
        this.value.slice(0, 10),
        this.mainService.password
      ),
      body: this.cryptoService.encrypt(this.value, this.mainService.password),
    });

    this.mainService.fetchNotes();
  }
}
