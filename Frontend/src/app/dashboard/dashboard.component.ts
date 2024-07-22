
// import { Component, OnInit } from '@angular/core';
// import { ProjectService } from '../project.service';
// import { Project, Task } from '../task.model';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit {
//   projects: Project[] = [];
//   isModalOpen = false;
//   completedTasksCount: number = 0;

//   constructor(private projectService: ProjectService) {}

//   ngOnInit() {
//     this.loadProjects();
//   }

//   loadProjects() {
//     this.projectService.getProjects().subscribe(
//       (projects) => {
//         this.projects = projects;
//         this.calculateCompletedTasks();
//       },
//       (error) => {
//         console.error('Error loading projects:', error);
//       }
//     );
//   }

//   openAddProjectModal() {
//     this.isModalOpen = true;
//   }

//   closeAddProjectModal() {
//     this.isModalOpen = false;
//   }

//   onProjectAdded(project: Project) {
//     this.projects.push(project);
//     this.calculateCompletedTasks();
//     this.closeAddProjectModal();
//   }

//   calculateCompletedTasks() {
//     this.completedTasksCount = this.projects.reduce((count, project) => {
//       return count + project.tasks.filter((task: Task) => task.completed).length;
//     }, 0);
//   }
// }
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../task.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  projects: Project[] = [];
  isModalOpen = false;

  constructor(private projectService: ProjectService) { }

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

  openAddProjectModal(): void {
    this.isModalOpen = true;
  }

  closeAddProjectModal(): void {
    this.isModalOpen = false;
  }

  onProjectAdded(project: Project): void {
    this.projects.push(project);
    this.closeAddProjectModal();
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
}
