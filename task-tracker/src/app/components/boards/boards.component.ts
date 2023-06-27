import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EntitiesService } from 'src/app/services/entities.service';
import { Board } from 'src/app/Task';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css'],
})
export class BoardsComponent implements OnInit {
  boards: Board[] = [];
  nameInput: string = '';

  constructor(private entitiesService: EntitiesService) {}

  ngOnInit(): void {
    this.boards = this.entitiesService.getAllBoards();
  }

  addBoard(value: string): void {
    this.entitiesService.addBoard(value);
    this.boards = this.entitiesService.getAllBoards();
  }

  removeBoard(id: number): void {
    this.entitiesService.removeBoardById(id);
    this.boards = this.entitiesService.getAllBoards();
  }

  addList(boardId: number, listName: string): void {
    if (!listName) {
      return;
    }
    this.entitiesService.addList(boardId, listName);
  }

  removeList(boardId: number, listId: number): void {
    this.entitiesService.deleteListById(boardId, listId);
  }
}
