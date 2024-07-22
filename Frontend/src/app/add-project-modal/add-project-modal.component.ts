import { Component, EventEmitter, Output } from '@angular/core';
import { Project } from '../task.model';

@Component({
  selector: 'app-add-project-modal',
  templateUrl: './add-project-modal.component.html',
  styleUrls: ['./add-project-modal.component.css']
})
export class AddProjectModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<Project>();
  project: Project = { name: '', description: '', tasks: [] };

  saveProject(): void {
    this.save.emit(this.project);
  }
}
