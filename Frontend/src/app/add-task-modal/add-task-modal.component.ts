import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.css']
})
export class AddTaskModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<Task>();
  task: Task = { title: '', description: '', completed: false };

  saveTask(): void {
    this.save.emit(this.task);
  }
}
