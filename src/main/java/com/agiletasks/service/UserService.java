package com.agiletasks.service;

import com.agiletasks.entity.User;
import com.agiletasks.model.UserModel;
import com.agiletasks.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UsersRepository userRepository;

    public List<UserModel> getAllUsers() {
        List<User> users = userRepository.findAll();
        List<UserModel> userModels = new ArrayList<>();
        for(User user: users) {
            userModels.add(new UserModel(user));
        }
        return userModels;
    }

    public UserModel registerUser(UserModel userModel) {
     User user = userRepository.save(new User(userModel));
     return new UserModel(user);
    }
}
