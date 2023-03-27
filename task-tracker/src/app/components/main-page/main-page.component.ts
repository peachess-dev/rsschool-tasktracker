import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  boards: string[] = [];

  constructor() {}

  onBoardsUpdated(boards: string[]) {
    this.boards = boards;
  }
}
