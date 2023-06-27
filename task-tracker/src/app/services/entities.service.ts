import { Injectable } from '@angular/core';
import { Board, List, Task } from '../Task';

@Injectable({
  providedIn: 'root',
})
export class EntitiesService {
  // Sample data
  private boards: Board[] = [
    {
      id: 1,
      name: 'Project X',
      lists: [
        {
          boardId: 1,
          id: 1,
          name: 'To Do',
          tasks: [
            {
              id: 1,
              title: 'Task 1',
              description: 'Do this thing',
              dueDate: new Date('2023-04-04'),
              completed: false,
            },
            {
              id: 2,
              title: 'Task 2',
              description: 'Do that thing',
              dueDate: new Date('2023-04-05'),
              completed: false,
            },
          ],
        },
        {
          boardId: 1,
          id: 2,
          name: 'Doing',
          tasks: [
            {
              id: 3,
              title: 'Task 3',
              description: 'Do this other thing',
              dueDate: new Date('2023-04-06'),
              completed: false,
            },
          ],
        },
        {
          boardId: 1,
          id: 3,
          name: 'Done',
          tasks: [
            {
              id: 4,
              title: 'Task 4',
              description: 'Do something else',
              dueDate: new Date('2023-04-07'),
              completed: true,
            },
          ],
        },
      ],
    },
    { id: 2, name: 'Board 2', lists: [] },
  ];

  // Get all boards
  getAllBoards(): Board[] {
    return this.boards;
  }

  // Get a specific board by ID
  getBoardById(id: number): Board | undefined {
    return this.boards.find((board) => board.id === id);
  }

  // Add a new board
  addBoard(name: string): void {
    const board: Board = {
      id: this.boards.length + 1,
      name,
      lists: [],
    };
    this.boards.push(board);
  }

  // Remove a board by ID
  removeBoardById(id: number): void {
    const index = this.boards.findIndex((board) => board.id === id);
    if (index !== -1) {
      this.boards.splice(index, 1);
    }
  }

  // Add a new list to a board
  addList(boardId: number, name: string): void {
    const board = this.getBoardById(boardId);
    if (board) {
      const list: List = {
        id: board.lists.length + 1,
        name,
        tasks: [],
        boardId,
      };
      board.lists.push(list);
    }
  }

  // Delete a list by ID
  deleteListById(boardId: number, listId: number): void {
    const board = this.getBoardById(boardId);
    if (board) {
      const index = board.lists.findIndex((list) => list.id === listId);
      if (index !== -1) {
        board.lists.splice(index, 1);
      }
    }
  }

  // Add a new task to a list
  addTaskToList(boardId: number, listId: number, task: Task): void {
    const board = this.getBoardById(boardId);
    if (board) {
      const list = board.lists.find((list) => list.id === listId);
      if (list) {
        list.tasks.push(task);
      }
    }
  }

  // Update a task in a list
  updateTask(boardId: number, listId: number, task: Task): void {
    const board = this.getBoardById(boardId);
    if (board) {
      const list = board.lists.find((list) => list.id === listId);
      if (list) {
        const index = list.tasks.findIndex((t) => t.id === task.id);
        if (index !== -1) {
          list.tasks[index] = task;
        }
      }
    }
  }

  // Delete a task by ID
  deleteTaskById(boardId: number, listId: number, taskId: number): void {
    const board = this.getBoardById(boardId);
    if (board) {
      const list = board.lists.find((list) => list.id === listId);
      if (list) {
        const index = list.tasks.findIndex((task) => task.id === taskId);
        if (index !== -1) {
          list.tasks.splice(index, 1);
        }
      }
    }
  }
}
