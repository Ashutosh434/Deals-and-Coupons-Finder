package com.example.couponservice.services;

import com.example.couponservice.entity.User;
import com.example.couponservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    public List<User> getAllUsers() {
        return userRepository.findAll();
    }


    public String addUser( User user) {
        userRepository.save(user);
        return "New User Added";
    }


    public String deleteUser( String userID) {
        userRepository.deleteById(userID);
        return "User deleted";
    }


    public User updateUser( User user, String userID) {
        return userRepository.save(user);
    }
}
