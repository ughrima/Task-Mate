

// package com.task.Task_Management_App.controller;

// import com.task.Task_Management_App.entities.Project;
// import com.task.Task_Management_App.entities.Task;
// import com.task.Task_Management_App.entities.User;
// import com.task.Task_Management_App.service.ProjectService;
// import com.task.Task_Management_App.service.TaskService;
// import com.task.Task_Management_App.service.UserService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// import java.security.Principal;
// import java.util.List;

// @RestController
// @RequestMapping("/api/projects")
// public class ProjectController {

//     @Autowired
//     private ProjectService projectService;

//     @Autowired
//     private TaskService taskService;

//     @Autowired
//     private UserService userService;

//     @GetMapping("/user")
//     public List<Project> getAllProjects(Principal principal) {
//         Long userId = getUserIdFromPrincipal(principal);
//         return projectService.getAllProjectsByUser(userId);
//     }

//     @GetMapping("/{id}")
//     public Project getProjectById(@PathVariable Long id) {
//         return projectService.getProjectById(id);
//     }

//     @PostMapping
//     public Project createProject(@RequestBody Project project, Principal principal) {
//         Long userId = getUserIdFromPrincipal(principal);
//         User user = userService.findById(userId);
//         project.setUser(user);
//         return projectService.createProject(project);
//     }

//     @PostMapping("/{projectId}/tasks")
//     public Task addTaskToProject(@PathVariable Long projectId, @RequestBody Task task) {
//         return taskService.createTask(projectId, task);
//     }

//     @PutMapping("/{id}")
//     public Project updateProject(@PathVariable Long id, @RequestBody Project project) {
//         return projectService.updateProject(id, project);
//     }

//     @DeleteMapping("/{id}")
//     public void deleteProject(@PathVariable Long id) {
//         projectService.deleteProject(id);
//     }

//     private Long getUserIdFromPrincipal(Principal principal) {
//         User user = userService.findByUsername(principal.getName());
//         return user.getId();
//     }
// }


package com.task.Task_Management_App.controller;

import com.task.Task_Management_App.entities.Project;
import com.task.Task_Management_App.entities.Task;
import com.task.Task_Management_App.entities.User;
import com.task.Task_Management_App.service.ProjectService;
import com.task.Task_Management_App.service.TaskService;
import com.task.Task_Management_App.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private TaskService taskService;

    @Autowired
    private UserService userService;

    @GetMapping("/user")
    public List<Project> getAllProjects(Principal principal) {
        Long userId = getUserIdFromPrincipal(principal);
        return projectService.getAllProjectsByUser(userId);
    }

    @GetMapping("/{id}")
    public Project getProjectById(@PathVariable Long id) {
        return projectService.getProjectById(id);
    }

    @PostMapping
    public Project createProject(@RequestBody Project project, Principal principal) {
        Long userId = getUserIdFromPrincipal(principal);
        User user = userService.findById(userId);
        project.setUser(user);
        return projectService.createProject(project);
    }

    @PostMapping("/{projectId}/tasks")
    public Task addTaskToProject(@PathVariable Long projectId, @RequestBody Task task) {
        return taskService.createTask(projectId, task);
    }

    @PutMapping("/{id}")
    public Project updateProject(@PathVariable Long id, @RequestBody Project project) {
        return projectService.updateProject(id, project);
    }

    @DeleteMapping("/{id}")
    public void deleteProject(@PathVariable Long id) {
        projectService.deleteProject(id);
    }

    private Long getUserIdFromPrincipal(Principal principal) {
        User user = userService.findByUsername(principal.getName());
        return user.getId();
    }
}
