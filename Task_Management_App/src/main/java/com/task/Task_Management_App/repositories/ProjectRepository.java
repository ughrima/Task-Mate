// ProjectRepository.java
package com.task.Task_Management_App.repositories;

import com.task.Task_Management_App.entities.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;


public interface ProjectRepository extends JpaRepository<Project, Long> {
    List<Project> findByUserId(Long userId);
    List<Project> findAllByUserIdAndImportant(Long userId, boolean important);
    List<Project> findAllByUserIdAndTasksCompleted(Long userId);
    List<Project> findAllByUserIdAndTasksNotCompleted(Long userId);
}
