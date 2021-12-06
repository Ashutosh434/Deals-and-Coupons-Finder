package com.example.user.controller;

import com.example.user.entity.User;
import com.example.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;


    @GetMapping(value = "/list")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }


    @PostMapping(value = "/add")
    public String addUser(@RequestBody User User) {
        userRepository.save(User);
        return "New User Added";
    }

    @DeleteMapping(value = "/delete/{UserID}")
    public String deleteUser(@PathVariable String UserID) {
        userRepository.deleteById(UserID);
        return "User deleted";
    }

    @PutMapping(value = "/update/{UserID}")
    public User updateUser(@RequestBody User User, @PathVariable String UserID) {

        return userRepository.save(User);
    }


}

