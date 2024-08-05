
package com.task.Task_Management_App.service;

import com.task.Task_Management_App.entities.Task;
import java.util.List;

public interface TaskService {
    List<Task> getAllTasks();
    Task getTaskById(Long id);
    Task createTask(Long projectId, Task task);
    Task updateTask(Long id, Task task);
    void deleteTask(Long id);
    List<Task> getTasksByProjectId(Long projectId); // Add this method
}

