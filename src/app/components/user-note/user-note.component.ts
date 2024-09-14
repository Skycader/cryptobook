import { Component, Input, inject } from '@angular/core';
import { MainService } from '../../service/main.service';

@Component({
  selector: 'app-user-note',
  standalone: true,
  imports: [],
  templateUrl: './user-note.component.html',
  styleUrl: './user-note.component.scss',
})
export class UserNoteComponent {
  @Input() id: string = '';
  @Input() title: string = '';
  @Input() body: string = '';

  public mainService = inject(MainService);

  public removeNote(id: string) {
    this.mainService.removeNote(id);
  }
}
