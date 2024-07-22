// package com.task.Task_Management_App.repositories;

// import com.task.Task_Management_App.entities.Task;
// import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.stereotype.Repository;
// import java.util.List;

// @Repository
// public interface TaskRepository extends JpaRepository<Task, Long> {
//     List<Task> findByUserId(Long userId);
// }

package com.task.Task_Management_App.repositories;

import com.task.Task_Management_App.entities.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByProjectId(Long projectId);
}
