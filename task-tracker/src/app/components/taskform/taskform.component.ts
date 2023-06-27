import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css'],
})
export class TaskformComponent implements OnInit {
  form!: FormGroup;

  @Input() task!: Task; // [task]=""
  @Output() taskChange = new EventEmitter<Task>(); //(taskChange)=""

  // [(task)]

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(this.task?.title || '', [Validators.required]),
      id: new FormControl(this.task?.id || '', [Validators.required]),
      description: new FormControl(this.task?.description || '', [
        Validators.required,
      ]),
      dueDate: new FormControl(this.task?.dueDate || undefined, [
        Validators.required,
      ]),
    });
    this.form.valueChanges.subscribe(() => {
      this.taskChange.emit(this.form.value);
    });
  }
}
