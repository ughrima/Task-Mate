// import { Component, EventEmitter, Output } from '@angular/core';
// import { Project } from '../task.model';

// @Component({
//   selector: 'app-add-project-modal',
//   templateUrl: './add-project-modal.component.html',
//   styleUrls: ['./add-project-modal.component.css']
// })
// export class AddProjectModalComponent {
//   @Output() projectAdded = new EventEmitter<Project>();
//   @Output() close = new EventEmitter<void>();

//   project: Project = {
//     name: '',
//     description: '',
//     tasks: [],
//     important: false,
//     createdAt: new Date().toISOString()
//   };

//   addProject() {
//     this.project.createdAt = new Date().toISOString(); // Set the creation date
//     this.projectAdded.emit(this.project);
//     this.project = {
//       name: '',
//       description: '',
//       tasks: [],
//       important: false,
//       createdAt: new Date().toISOString()
//     };
//   }

//   closeModal() {
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
  project: Project = { name: '', description: '', tasks: [], important: false, createdAt: new Date().toISOString() };

  saveProject(): void {
    this.projectAdded.emit(this.project);
  }
}
