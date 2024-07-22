
// package com.task.Task_Management_App.service.impl;

// import com.task.Task_Management_App.entities.Project;
// import com.task.Task_Management_App.entities.Task;
// import com.task.Task_Management_App.repositories.ProjectRepository;
// import com.task.Task_Management_App.repositories.TaskRepository;
// import com.task.Task_Management_App.service.TaskService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;

// @Service
// public class TaskServiceImpl implements TaskService {

//     @Autowired
//     private TaskRepository taskRepository;

//     @Autowired
//     private ProjectRepository projectRepository;

//     @Override
//     public List<Task> getAllTasks() {
//         return taskRepository.findAll();
//     }

//     @Override
//     public Task getTaskById(Long id) {
//         return taskRepository.findById(id).orElse(null);
//     }

//     @Override
//     public Task createTask(Long projectId, Task task) {
//         Project project = projectRepository.findById(projectId).orElse(null);
//         if (project != null) {
//             task.setProject(project);
//             return taskRepository.save(task);
//         }
//         return null;
//     }

//     @Override
//     public Task updateTask(Long id, Task task) {
//         Task existingTask = taskRepository.findById(id).orElse(null);
//         if (existingTask != null) {
//             existingTask.setTitle(task.getTitle());
//             existingTask.setDescription(task.getDescription());
//             existingTask.setCompleted(task.isCompleted());
//             return taskRepository.save(existingTask);
//         }
//         return null;
//     }

//     @Override
//     public void deleteTask(Long id) {
//         taskRepository.deleteById(id);
//     }
// }
package com.task.Task_Management_App.service.impl;

import com.task.Task_Management_App.entities.Task;
import com.task.Task_Management_App.repositories.TaskRepository;
import com.task.Task_Management_App.repositories.ProjectRepository;
import com.task.Task_Management_App.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @Override
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    @Override
    public Task getTaskById(Long id) {
        return taskRepository.findById(id).orElse(null);
    }

    @Override
    public Task createTask(Long projectId, Task task) {
        var project = projectRepository.findById(projectId).orElse(null);
        if (project != null) {
            task.setProject(project);
            return taskRepository.save(task);
        }
        return null;
    }

    @Override
    public Task updateTask(Long id, Task task) {
        var existingTask = taskRepository.findById(id).orElse(null);
        if (existingTask != null) {
            existingTask.setTitle(task.getTitle());
            existingTask.setDescription(task.getDescription());
            existingTask.setCompleted(task.isCompleted());
            return taskRepository.save(existingTask);
        }
        return null;
    }

    @Override
    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }

    @Override
    public List<Task> getTasksByProjectId(Long projectId) {
        return taskRepository.findByProjectId(projectId);
    }
}
