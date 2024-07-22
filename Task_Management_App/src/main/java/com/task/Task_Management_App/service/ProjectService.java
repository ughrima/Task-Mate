package com.task.Task_Management_App.service;

import com.task.Task_Management_App.entities.Project;

import java.util.List;

public interface ProjectService {
    List<Project> getAllProjectsByUser(Long userId);
    Project getProjectById(Long id);
    Project createProject(Project project);
    Project updateProject(Long id, Project project);
    void deleteProject(Long id);
}
