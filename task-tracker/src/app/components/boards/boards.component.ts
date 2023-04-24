import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EntitiesService } from 'src/app/services/entities.service';
import { Board, List, Task } from 'src/app/Task';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css'],
})
export class BoardsComponent implements OnInit {
  constructor(private entitiesService: EntitiesService) {}

  boards: string[] = [];

  ngOnInit(): void {
    this.boards = this.entitiesService.getAllBoards();
  }

  @Output() boardClicked = new EventEmitter<string>();

  onBoardClicked(boardName: string) {
    this.boardClicked.emit(boardName);
  }

  onDeleteBoard(boardName: string) {
    const index = this.boards.indexOf(boardName);
    if (index !== -1) {
      this.boards.splice(index, 1);
    }
  }
}
