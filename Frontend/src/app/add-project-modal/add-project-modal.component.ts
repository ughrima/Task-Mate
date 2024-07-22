import { Component, EventEmitter, Output } from '@angular/core';
import { Project } from '../task.model';
import { ProjectService } from '../project.service';

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
    tasks: []
  };

  constructor(private projectService: ProjectService) {}

  saveProject(): void {
    this.projectService.addProject(this.project).subscribe(
      (project) => {
        this.projectAdded.emit(project);
        this.close.emit();
      },
      (error) => {
        console.error('Error saving project:', error);
      }
    );
  }
}
