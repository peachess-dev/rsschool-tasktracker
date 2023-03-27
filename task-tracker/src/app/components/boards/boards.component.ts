import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css'],
})
export class BoardsComponent implements OnInit {
  boards: string[] = ['My board 1', 'My board 2', 'My board 3'];

  @Output() boardsUpdated = new EventEmitter<string[]>();

  ngOnInit() {
    this.boardsUpdated.emit(this.boards);
  }
}
