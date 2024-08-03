import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../task.model';

@Component({
  selector: 'app-edit-project-modal',
  templateUrl: './edit-project-modal.component.html',
  styleUrls: ['./edit-project-modal.component.css']
})
export class EditProjectModalComponent {
  @Input() project!: Project;
  @Output() close = new EventEmitter<void>();
  @Output() projectUpdated = new EventEmitter<Project>();

  saveProject(): void {
    this.projectUpdated.emit(this.project);
  }
}
