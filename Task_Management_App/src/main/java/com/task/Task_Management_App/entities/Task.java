// package com.task.Task_Management_App.entities;

// import jakarta.persistence.*;
// import lombok.AllArgsConstructor;
// import lombok.Data;
// import lombok.NoArgsConstructor;

// import com.fasterxml.jackson.annotation.JsonBackReference;

// @Data
// @Entity
// @NoArgsConstructor
// @AllArgsConstructor
// public class Task {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;
//     private String title;
//     private String description;
//     private boolean completed;

//     @ManyToOne
//     @JsonBackReference
//     @JoinColumn(name = "project_id")
//     private Project project;

//     @ManyToOne
//     @JsonBackReference
//     @JoinColumn(name = "user_id")
//     private User user;
// }
package com.task.Task_Management_App.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private boolean completed;

    @ManyToOne
    @JoinColumn(name = "project_id")
    @JsonIgnore
    private Project project;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user;
}
