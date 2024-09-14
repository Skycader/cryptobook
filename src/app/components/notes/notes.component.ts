import { Component } from '@angular/core';
import { AddNoteComponent } from '../add-note/add-note.component';
import { UserNoteComponent } from '../user-note/user-note.component';
import { UserNotesComponent } from '../user-notes/user-notes.component';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [AddNoteComponent, UserNoteComponent, UserNotesComponent],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss',
})
export class NotesComponent {}
