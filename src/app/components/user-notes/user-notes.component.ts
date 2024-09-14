import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MainService } from '../../service/main.service';
import { UserNoteComponent } from '../user-note/user-note.component';

@Component({
  selector: 'app-user-notes',
  standalone: true,
  imports: [UserNoteComponent, CommonModule],
  templateUrl: './user-notes.component.html',
  styleUrl: './user-notes.component.scss',
})
export class UserNotesComponent {
  public mainService = inject(MainService);

  ngOnInit() {
    this.mainService.fetchNotes();
    console.log('NOTES: ', this.mainService.notes);
  }
}
