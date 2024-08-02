// // package com.task.Task_Management_App.service.impl;

// // import com.task.Task_Management_App.entities.User;
// // import com.task.Task_Management_App.repositories.UserRepository;
// // import com.task.Task_Management_App.service.UserService;
// // import org.springframework.beans.factory.annotation.Autowired;
// // import org.springframework.security.core.userdetails.UserDetails;
// // import org.springframework.security.core.userdetails.UsernameNotFoundException;
// // import org.springframework.stereotype.Service;

// // @Service
// // public class UserServiceImpl implements UserService {
    
// //     @Autowired
// //     private UserRepository userRepository;

// //     @Override
// //     public User findByUsername(String username) {
// //         return userRepository.findByUsername(username)
// //             .orElseThrow(() -> new UsernameNotFoundException("User not found"));
// //     }

// //     @Override
// //     public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
// //         return findByUsername(username);
// //     }
// //     @Override
// //     public User findById(Long id) { // Implement this method
// //         return userRepository.findById(id).orElse(null);
// //     }
// // }
// package com.task.Task_Management_App.service.impl;

// import com.task.Task_Management_App.entities.User;
// import com.task.Task_Management_App.repositories.UserRepository;
// import com.task.Task_Management_App.service.UserService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UsernameNotFoundException;
// import org.springframework.stereotype.Service;

// @Service
// public class UserServiceImpl implements UserService {
    
//     @Autowired
//     private UserRepository userRepository;

//     @Override
//     public User findByUsername(String username) {
//         return userRepository.findByUsername(username)
//             .orElseThrow(() -> new UsernameNotFoundException("User not found"));
//     }

//     @Override
//     public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//         return findByUsername(username);
//     }

//     @Override
//     public User findById(Long id) {
//         return userRepository.findById(id).orElse(null);
//     }
// }
package com.task.Task_Management_App.service.impl;

import com.task.Task_Management_App.entities.User;
import com.task.Task_Management_App.repositories.UserRepository;
import com.task.Task_Management_App.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    
    @Autowired
    private UserRepository userRepository;

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username)
            .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return findByUsername(username);
    }

    @Override
    public User findById(Long id) {
        return userRepository.findById(id).orElse(null);
    }
}

