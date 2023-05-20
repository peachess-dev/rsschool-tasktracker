import { Component, Input, Output } from '@angular/core';
import { EntitiesService } from 'src/app/services/entities.service';
import { List, Task } from 'src/app/Task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() list!: List;

  task!: Task;
  dueDate!: Date;

  constructor(private entitiesService: EntitiesService) {}

  addTask(task: Task): void {
    if (!task) {
      return;
    }
    task.id = this.list.tasks.length + 1;
    this.entitiesService.addTaskToList(this.list.boardId, this.list.id, task);
  }

  deleteTask(taskId: number): void {
    this.entitiesService.deleteTaskById(
      this.list.boardId,
      this.list.id,
      taskId
    );
  }

  updateTask(updatedTask: Task): void {
    const taskIndex = this.list.tasks.findIndex(
      (task) => task.id === updatedTask.id
    );
    if (taskIndex !== -1) {
      this.list.tasks[taskIndex] = {
        ...this.list.tasks[taskIndex],
        ...updatedTask,
      };
      this.entitiesService.updateTask(
        this.list.boardId,
        this.list.id,
        updatedTask
      );
    }
  }

  deleteList(): void {
    this.entitiesService.deleteListById(this.list.boardId, this.list.id);
  }
}
