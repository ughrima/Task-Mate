import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Project, Task } from '../task.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project!: Project;
  isModalOpen: boolean = false;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void { }

  calculateProgress(): string {
    const completedTasks = this.project.tasks.filter((task: Task) => task.completed).length;
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
}


