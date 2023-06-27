import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { FormGroup, FormControl } from '@angular/forms';
import { EntitiesService } from 'src/app/services/entities.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  constructor(private entitiesService: EntitiesService) {}

  @Input() task!: Task;
  @Output() addTask = new EventEmitter<Task>();
  @Output() deleteTask = new EventEmitter<number>();
  @Output() updateTask = new EventEmitter<Task>();

  isEditing: boolean = false;
  editedTitle: string = '';
  editedDescription: string = '';
  editedDueDate: Date = new Date();
  defaultTask!: Task;

  ngOnInit(): void {
    this.defaultTask = { ...this.task };
  }

  startEditing(): void {
    this.isEditing = true;
    this.editedTitle = this.task.title;
    this.editedDescription = this.task.description;
    this.editedDueDate = this.task.dueDate;
  }

  cancelEditing(task: Task): void {
    if (this.defaultTask) {
      this.editedTitle = this.defaultTask.title;
      this.editedDescription = this.defaultTask.description;
      this.editedDueDate = this.defaultTask.dueDate;
    }
    this.updateTask.emit(this.defaultTask);
    this.isEditing = false;
  }

  saveChanges(task: Task): void {
    const updatedTask: Task = {
      ...this.task,
      ...task,
    };
    this.updateTask.emit(updatedTask);
    this.task = updatedTask;
    this.isEditing = false;
  }

  onDeleteTask(): void {
    this.deleteTask.emit(this.task.id);
  }

  onAddTask(task: Task) {
    const newTask: Task = {
      ...task,
    };
    this.addTask.emit(newTask);
  }
}
