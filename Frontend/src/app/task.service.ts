
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://task-mate-t98z.onrender.com/api/tasks';

  constructor(private http: HttpClient) {}

  getTasksByProjectId(projectId: number): Observable<Task[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<Task[]>(`${this.apiUrl}/project/${projectId}`, { headers });
  }

  addTask(projectId: number, task: Task): Observable<Task> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.post<Task>(`${this.apiUrl}/project/${projectId}`, task, { headers });
  }

  updateTask(taskId: number, task: Task): Observable<Task> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.put<Task>(`${this.apiUrl}/${taskId}`, task, { headers });
  }
}
