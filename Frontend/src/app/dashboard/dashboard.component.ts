// import { Component, OnInit } from '@angular/core';
// import { TaskService } from '../task.service';
// import { Task } from '../task.model';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit {
//   tasks: Task[] = [];

//   constructor(private taskService: TaskService) { }

//   ngOnInit(): void {
//     this.loadTasks();
//   }

//   loadTasks(): void {
//     this.taskService.getTasks().subscribe(tasks => {
//       this.tasks = tasks;
//     });
//   }

//   deleteTask(id: number): void {
//     this.taskService.deleteTask(id).subscribe(() => {
//       this.tasks = this.tasks.filter(task => task.id !== id);
//     });
//   }

//   completeTask(task: Task): void {
//     task.completed = true;
//     this.taskService.updateTask(task.id!, task).subscribe();
//   }
// }

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProjectModalComponent } from '../add-project-modal/add-project-modal.component';
import { TaskService } from '../task.service';
import { Project } from '../task.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  projects: Project[] = [];
  completedTasksCount: number = 0;

  constructor(private taskService: TaskService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.taskService.getProjects().subscribe((projects: Project[]) => {
      this.projects = projects;
      this.calculateCompletedTasks();
    });
  }

  calculateCompletedTasks(): void {
    let count = 0;
    this.projects.forEach(project => {
      project.tasks.forEach(task => {
        if (task.completed) count++;
      });
    });
    this.completedTasksCount = count;
  }

  openAddProjectModal(): void {
    const dialogRef = this.dialog.open(AddProjectModalComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadProjects();
      }
    });
  }
}
