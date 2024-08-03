import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Project, Task } from '../task.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project!: Project;
  isModalOpen: boolean = false;

  constructor(private taskService: TaskService, private projectService: ProjectService) { }

  ngOnInit(): void { }

  calculateProgress(): string {
    const completedTasks = this.project.tasks.filter(task => task.completed).length;
    return `${completedTasks} / ${this.project.tasks.length}`;
  }

  openAddTaskModal(): void {
    this.isModalOpen = true;
  }

  addTask(task: Task): void {
    this.taskService.addTask(this.project.id!, task).subscribe((newTask: Task) => {
      this.project.tasks.push(newTask);
      this.isModalOpen = false;
    });
  }

  deleteProject(project: Project): void {
    this.projectService.deleteProject(project.id!).subscribe(() => {
      // Handle project deletion logic, e.g., refresh the project list
    });
  }

  openEditProjectModal(): void {
    // Open modal for editing the project
  }

  isProjectComplete(project: Project): boolean {
    return project.tasks.every(task => task.completed);
  }
}
