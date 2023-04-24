import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  @Input() boards: string[] = [];
  @Output() createBoard = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onCreateBoard() {
    this.createBoard.emit();
  }
}
