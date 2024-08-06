import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { TaskService } from '../task.service';
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
  isEditTaskModalOpen = false;
  selectedProject: Project | null = null;
  selectedTask: Task | null = null;
  currentView: string = 'all';

  constructor(
    private projectService: ProjectService,
    private taskService: TaskService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getProjects().subscribe(
      (projects) => {
        this.projects = projects.map(project => ({
          ...project,
          headerColor: this.getRandomColor()
        }));
      },
      (error) => {
        console.error('Error loading projects:', error);
      }
    );
  }

  getRandomColor(): string {
    const colors = ['#ff9999', '#66b3ff', '#99ff99', '#ffcc99', '#c2c2f0', '#ffb3e6', '#c4e17f'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  loadCompleteProjects(): void {
    this.projectService.getCompleteProjects().subscribe(
      (projects: Project[]) => {
        this.projects = projects.map(project => ({
          ...project,
          headerColor: this.getRandomColor()
        }));
        this.currentView = 'complete';
      },
      (error: any) => {
        console.error('Error loading complete projects:', error);
      }
    );
  }

  loadIncompleteProjects(): void {
    this.projectService.getIncompleteProjects().subscribe(
      (projects: Project[]) => {
        this.projects = projects.map(project => ({
          ...project,
          headerColor: this.getRandomColor()
        }));
        this.currentView = 'incomplete';
      },
      (error: any) => {
        console.error('Error loading incomplete projects:', error);
      }
    );
  }

  loadImportantProjects(): void {
    this.projectService.getImportantProjects().subscribe(
      (projects: Project[]) => {
        this.projects = projects.map(project => ({
          ...project,
          headerColor: this.getRandomColor()
        }));
        this.currentView = 'important';
      },
      (error: any) => {
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
    this.projectService.addProject(project).subscribe(
      (savedProject) => {
        savedProject.headerColor = this.getRandomColor();
        this.projects.push(savedProject);
        this.closeAddProjectModal();
      },
      (error) => {
        console.error('Error adding project:', error);
      }
    );
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
    this.projectService.updateProject(updatedProject).subscribe(
      (savedProject) => {
        const index = this.projects.findIndex(p => p.id === savedProject.id);
        if (index !== -1) {
          savedProject.headerColor = this.projects[index].headerColor;
          this.projects[index] = savedProject;
        }
        this.closeEditProjectModal();
      },
      (error) => {
        console.error('Error updating project:', error);
      }
    );
  }

  openAddTaskModal(project: Project): void {
    this.selectedProject = project;
    this.isTaskModalOpen = true;
    this.loadTasks(project.id!);
  }

  closeAddTaskModal(): void {
    this.isTaskModalOpen = false;
  }

  onTaskAdded(task: Task): void {
    if (this.selectedProject) {
      this.taskService.addTask(this.selectedProject.id!, task).subscribe(
        (savedTask) => {
          this.selectedProject!.tasks.push(savedTask);
          this.closeAddTaskModal();
          this.updateProjectCompletionStatus(this.selectedProject!);
        },
        (error) => {
          console.error('Error adding task:', error);
        }
      );
    }
  }

  openEditTaskModal(task: Task): void {
    this.selectedTask = task;
    this.isEditTaskModalOpen = true;
  }

  closeEditTaskModal(): void {
    this.isEditTaskModalOpen = false;
  }

  onTaskUpdated(updatedTask: Task): void {
    const project = this.projects.find(p => p.id === updatedTask.project?.id);
    if (project) {
      const index = project.tasks.findIndex(t => t.id === updatedTask.id);
      if (index !== -1) {
        project.tasks[index] = updatedTask;
      }
      this.updateProjectCompletionStatus(project);
    }
    this.closeEditTaskModal();
  }

  loadTasks(projectId: number): void {
    this.taskService.getTasksByProjectId(projectId).subscribe(
      (tasks) => {
        const project = this.projects.find(p => p.id === projectId);
        if (project) {
          project.tasks = tasks;
        }
      },
      (error) => {
        console.error('Error loading tasks:', error);
      }
    );
  }

  updateTaskStatus(task: Task): void {
    this.taskService.updateTask(task.id!, task).subscribe(
      (updatedTask: Task) => {
        task.completed = updatedTask.completed;
  
        if (this.selectedProject) {
          this.selectedProject.completed = this.isProjectComplete(this.selectedProject);
        }
      },
      (error: any) => {
        console.error('Error updating task status:', error);
      }
    );
  }
  

  updateProjectCompletionStatus(project: Project): void {
    project.completed = project.tasks.every(task => task.completed);
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
  
  get incompletedTasksCount(): number {
    let count = 0;
    this.projects.forEach(project => {
      project.tasks.forEach(task => {
        if (!task.completed) {
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




