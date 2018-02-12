package com.agiletasks.service;

import com.agiletasks.entity.User;
import com.agiletasks.model.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.agiletasks.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<UserModel> getAllUsers() {
        List<User> users = userRepository.findAll();
        List<UserModel> userModels = new ArrayList<>();
        for(User user: users) {
            userModels.add(new UserModel(user));
        }
        return userModels;
    }
}
