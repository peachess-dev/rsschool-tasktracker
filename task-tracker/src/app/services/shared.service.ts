import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  private numOfBoards = new BehaviorSubject<number>(0);

  setNumOfBoards(num: number) {
    this.numOfBoards.next(num);
  }

  getNumOfBoards() {
    return this.numOfBoards.asObservable();
  }
}
