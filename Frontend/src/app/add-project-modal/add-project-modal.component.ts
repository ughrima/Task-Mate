
// import { Component, EventEmitter, Output, Input } from '@angular/core';
// import { Task, Project } from '../task.model';

// @Component({
//   selector: 'app-add-task-modal',
//   templateUrl: './add-task-modal.component.html',
//   styleUrls: ['./add-task-modal.component.css']
// })
// export class AddTaskModalComponent {
//   @Input() project!: Project;
//   @Output() close = new EventEmitter<void>();
//   @Output() taskAdded = new EventEmitter<Task>();
//   task: Task = { title: '', description: '', completed: false };

//   saveTask(): void {
//     this.taskAdded.emit(this.task);
//     this.close.emit();
//   }
// }

import { Component, EventEmitter, Output } from '@angular/core';
import { Project } from '../task.model';

@Component({
  selector: 'app-add-project-modal',
  templateUrl: './add-project-modal.component.html',
  styleUrls: ['./add-project-modal.component.css']
})
export class AddProjectModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() projectAdded = new EventEmitter<Project>();

  project: Project = {
    name: '',
    description: '',
    important: false,
    createdAt: new Date().toISOString(),
    tasks: []
  };

  addProject() {
    this.projectAdded.emit(this.project);
    this.close.emit();
  }
}

