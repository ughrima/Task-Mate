// project.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'http://localhost:8080/api/projects';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<Project[]>(`${this.apiUrl}/user`, { headers });
  }

  addProject(project: Project): Observable<Project> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.post<Project>(this.apiUrl, project, { headers });
  }

  deleteProject(id: number): Observable<void> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers });
  }

  updateProject(project: Project): Observable<Project> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.put<Project>(`${this.apiUrl}/${project.id}`, project, { headers });
  }

  getCompleteProjects(): Observable<Project[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<Project[]>(`${this.apiUrl}/complete`, { headers });
  }

  getIncompleteProjects(): Observable<Project[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<Project[]>(`${this.apiUrl}/incomplete`, { headers });
  }

  getImportantProjects(): Observable<Project[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<Project[]>(`${this.apiUrl}/important`, { headers });
  }
}
