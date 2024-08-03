// import { Component, EventEmitter, Output } from '@angular/core';
// import { Task } from '../task.model';

// @Component({
//   selector: 'app-add-task-modal',
//   templateUrl: './add-task-modal.component.html',
//   styleUrls: ['./add-task-modal.component.css']
// })
// export class AddTaskModalComponent {
//   @Output() close = new EventEmitter<void>();
//   @Output() save = new EventEmitter<Task>();
//   task: Task = { title: '', description: '', completed: false };

//   saveTask(): void {
//     this.save.emit(this.task);
//   }
// }

// add-task-modal.component.ts
import { Component, EventEmitter, Output, Input } from '@angular/core';
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
  task: Task = { title: '', description: '', completed: false };

  saveTask(): void {
    this.taskAdded.emit(this.task);
    this.close.emit();
  }
}
