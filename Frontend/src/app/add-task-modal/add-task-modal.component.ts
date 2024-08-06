import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task, Project } from '../task.model';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.css']
})
export class AddTaskModalComponent {
  @Input() project!: Project;
  @Output() close = new EventEmitter<void>();
  @Output() taskAdded = new EventEmitter<Task>();

  task: Task = {
    title: '',
    completed: false,
    project: this.project
  };

  addTask() {
    this.task.project = this.project;
    this.taskAdded.emit(this.task);
    this.close.emit();
  }
}
