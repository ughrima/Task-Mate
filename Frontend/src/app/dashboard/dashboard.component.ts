
// import { Component, OnInit } from '@angular/core';
// import { ProjectService } from '../project.service';
// import { Project } from '../task.model';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit {
//   projects: Project[] = [];
//   isModalOpen = false;

//   constructor(private projectService: ProjectService) { }

//   ngOnInit(): void {
//     this.loadProjects();
//   }

//   loadProjects(): void {
//     this.projectService.getProjects().subscribe(
//       (projects) => {
//         this.projects = projects;
//       },
//       (error) => {
//         console.error('Error loading projects:', error);
//       }
//     );
//   }

//   openAddProjectModal(): void {
//     this.isModalOpen = true;
//   }

//   closeAddProjectModal(): void {
//     this.isModalOpen = false;
//   }

//   onProjectAdded(project: Project): void {
//     this.projects.push(project);
//     this.closeAddProjectModal();
//   }

//   get completedTasksCount(): number {
//     let count = 0;
//     this.projects.forEach(project => {
//       project.tasks.forEach(task => {
//         if (task.completed) {
//           count++;
//         }
//       });
//     });
//     return count;
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../task.model';
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

  signOut(): void {
    this.authService.logout();
    this.router.navigate(['/signin']);
  }

  getUsername(): string | null {
    return this.authService.getUsername();
  }
}
