package com.task.Task_Management_App.service.impl;

// import com.task.Task_Management_App.entities.Project;
// import com.task.Task_Management_App.entities.User;
// import com.task.Task_Management_App.repositories.ProjectRepository;
// import com.task.Task_Management_App.repositories.UserRepository;
// import com.task.Task_Management_App.service.ProjectService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;

// @Service
// public class ProjectServiceImpl implements ProjectService {
//     @Autowired
//     private ProjectRepository projectRepository;

//     @Autowired
//     private UserRepository userRepository;

//     @Override
//     public List<Project> getAllProjectsByUser(Long userId) {
//         return projectRepository.findByUserId(userId);
//     }

//     @Override
//     public Project getProjectById(Long id) {
//         return projectRepository.findById(id).orElse(null);
//     }

//     @Override
//     public Project createProject(Project project) {
//         return projectRepository.save(project);
//     }

//     @Override
//     public Project updateProject(Long id, Project project) {
//         Project existingProject = projectRepository.findById(id).orElse(null);
//         if (existingProject != null) {
//             existingProject.setName(project.getName());
//             existingProject.setDescription(project.getDescription());
//             existingProject.setImportant(project.isImportant());
//             return projectRepository.save(existingProject);
//         }
//         return null;
//     }

//     @Override
//     public void deleteProject(Long id) {
//         projectRepository.deleteById(id);
//     }

//     @Override
//     public List<Project> getImportantProjects(Long userId) {
//         return projectRepository.findAllByUserIdAndImportant(userId, true);
//     }

//     @Override
//     public List<Project> getCompleteProjects(Long userId) {
//         return projectRepository.findAllByUserIdAndTasksCompleted(userId, true);
//     }

//     @Override
//     public List<Project> getIncompleteProjects(Long userId) {
//         return projectRepository.findAllByUserIdAndTasksCompleted(userId, false);
//     }
// }


// ProjectServiceImpl.java
import com.task.Task_Management_App.entities.Project;
import com.task.Task_Management_App.repositories.ProjectRepository;
import com.task.Task_Management_App.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProjectServiceImpl implements ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    @Override
    public List<Project> getAllProjectsByUser(Long userId) {
        return projectRepository.findByUserId(userId);
    }

    @Override
    public Project getProjectById(Long id) {
        return projectRepository.findById(id).orElse(null);
    }

    @Override
    public Project createProject(Project project) {
        return projectRepository.save(project);
    }

    @Override
    public Project updateProject(Long id, Project project) {
        Project existingProject = projectRepository.findById(id).orElse(null);
        if (existingProject != null) {
            existingProject.setName(project.getName());
            existingProject.setDescription(project.getDescription());
            existingProject.setImportant(project.isImportant());
            return projectRepository.save(existingProject);
        }
        return null;
    }

    @Override
    public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }

    @Override
    public List<Project> getImportantProjects(Long userId) {
        return projectRepository.findAllByUserIdAndImportant(userId, true);
    }

    @Override
    public List<Project> getCompleteProjects(Long userId) {
        return projectRepository.findAllByUserIdAndTasksCompleted(userId, true);
    }

    @Override
    public List<Project> getIncompleteProjects(Long userId) {
        return projectRepository.findAllByUserIdAndTasksCompleted(userId, false);
    }
}
