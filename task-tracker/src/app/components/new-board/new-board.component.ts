import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';

@Component({
  selector: 'app-board',
  templateUrl: './new-board.component.html',
  styleUrls: ['./new-board.component.css'],
})
export class BoardComponent {
  tasks: Task[] = TASKS;

  @Input() boardName: string = '';

  constructor() {}

  @Output() delete = new EventEmitter<void>();

  setBoardName(boardName: string) {
    this.boardName = boardName;
  }

  onDelete() {
    this.delete.emit();
  }
}
