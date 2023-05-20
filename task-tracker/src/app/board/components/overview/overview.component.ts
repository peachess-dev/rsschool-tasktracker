import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/Task';
import { EntitiesService } from 'src/app/services/entities.service';

@Component({
  selector: 'app-board-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class BoardOverviewComponent implements OnInit {
  boards: Board[] = [];
  nameInput: string = '';

  constructor(private entitiesService: EntitiesService) {}

  ngOnInit(): void {
    this.boards = this.entitiesService.getAllBoards();
  }
}
