import { Component } from '@angular/core';
import { EntitiesService } from 'src/app/services/entities.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [EntitiesService],
})
export class MainPageComponent {
  boards: string[] = ['My board 1', 'My board 2', 'My board 3'];
  selectedBoard: string | null = null;

  constructor(private myService: EntitiesService) {}

  onBoardsUpdated(boards: string[]) {
    this.boards = boards;
  }

  onBoardClicked(boardName: string) {
    this.selectedBoard = boardName;
  }
}
