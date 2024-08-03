import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project, Task } from '../task.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  projects: Project[] = [];
  isModalOpen = false;
  isEditModalOpen = false;
  isTaskModalOpen = false;
  selectedProject: Project | null = null;
  currentView: string = 'all';

  constructor(private projectService: ProjectService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getProjects().subscribe(
      (projects) => {
        this.projects = projects;
      },
      (error) => {
        console.error('Error loading projects:', error);
      }
    );
  }

  loadCompleteProjects(): void {
    this.projectService.getCompleteProjects().subscribe(
      (projects) => {
        this.projects = projects;
        this.currentView = 'complete';
      },
      (error) => {
        console.error('Error loading complete projects:', error);
      }
    );
  }

  loadIncompleteProjects(): void {
    this.projectService.getIncompleteProjects().subscribe(
      (projects) => {
        this.projects = projects;
        this.currentView = 'incomplete';
      },
      (error) => {
        console.error('Error loading incomplete projects:', error);
      }
    );
  }

  loadImportantProjects(): void {
    this.projectService.getImportantProjects().subscribe(
      (projects) => {
        this.projects = projects;
        this.currentView = 'important';
      },
      (error) => {
        console.error('Error loading important projects:', error);
      }
    );
  }

  openAddProjectModal(): void {
    this.isModalOpen = true;
  }

  closeAddProjectModal(): void {
    this.isModalOpen = false;
  }

  onProjectAdded(project: Project): void {
    if (project) {
      this.projects.push(project);
    }
    this.closeAddProjectModal();
  }

  deleteProject(project: Project): void {
    this.projectService.deleteProject(project.id!).subscribe(
      () => {
        this.projects = this.projects.filter(p => p.id !== project.id);
      },
      (error) => {
        console.error('Error deleting project:', error);
      }
    );
  }

  openEditProjectModal(project: Project): void {
    this.selectedProject = project;
    this.isEditModalOpen = true;
  }

  closeEditProjectModal(): void {
    this.isEditModalOpen = false;
  }

  onProjectUpdated(updatedProject: Project): void {
    const index = this.projects.findIndex(p => p.id === updatedProject.id);
    if (index !== -1) {
      this.projects[index] = updatedProject;
    }
    this.closeEditProjectModal();
  }

  openAddTaskModal(project: Project): void {
    this.selectedProject = project;
    this.isTaskModalOpen = true;
  }

  closeAddTaskModal(): void {
    this.isTaskModalOpen = false;
  }

  onTaskAdded(task: Task): void {
    if (this.selectedProject) {
      this.selectedProject.tasks.push(task);
      this.isTaskModalOpen = false;
    }
  }

  signOut(): void {
    this.authService.logout();
    this.router.navigate(['/signin']);
  }

  getUsername(): string | null {
    return this.authService.getUsername();
  }

  get completedTasksCount(): number {
    let count = 0;
    this.projects.forEach(project => {
      project.tasks.forEach(task => {
        if (task.completed) {
          count++;
        }
      });
    });
    return count;
  }

  isProjectComplete(project: Project): boolean {
    return project.tasks.every(task => task.completed);
  }
}
