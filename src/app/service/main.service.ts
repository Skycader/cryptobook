import { Injectable } from '@angular/core';
import { NoteInterface } from '../models/note.model';
import { CryptoService } from './crypto.service';
import { PersistanceService } from './persistance.service';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  public loggedIn: boolean = false;
  public password = '';
  public notes: NoteInterface[] = [];
  public allNotes: NoteInterface[] = this.persistance.get('notes');

  constructor(
    private persistance: PersistanceService,
    private cryptoService: CryptoService
  ) {}

  public addNote(note: NoteInterface) {
    this.allNotes.push(note);
    this.persistance.set('notes', this.allNotes);
    this.fetchNotes();
  }

  public fetchNotes() {
    const notes = this.persistance.get('notes', []);
    const decryptedNotes = notes
      .map((note: NoteInterface) => {
        return {
          ...note,
          title: this.cryptoService.decrypt(note.title, this.password),
          body: this.cryptoService.decrypt(note.body, this.password),
        };
      })
      .filter((note: NoteInterface) => note.body.length > 0);

    this.notes = decryptedNotes;
  }

  public removeNote(id: string) {
    this.allNotes = this.allNotes.filter(
      (note: NoteInterface) => note.id !== id
    );
    this.persistance.set('notes', this.allNotes);
    this.fetchNotes();
  }
}
