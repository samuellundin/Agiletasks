package com.agiletasks.service;

import com.agiletasks.entity.User;
import com.agiletasks.model.UserModel;
import com.agiletasks.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    private final UsersRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public UserService(UsersRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    public List<UserModel> getAllUsers() {
        List<User> users = userRepository.findAll();
        List<UserModel> userModels = new ArrayList<>();
        for(User user: users) {
            UserModel model = new UserModel(user);
            model.setPassword("");
            userModels.add(model);
        }
        return userModels;
    }

    public UserModel registerUser(UserModel userModel) {
        userModel.setPassword(bCryptPasswordEncoder.encode(userModel.getPassword()));
        User user = userRepository.save(new User(userModel));
        return new UserModel(user);
    }

    public UserModel getUserByEmail(String email) {
        UserModel userModel = new UserModel(userRepository.findByEmail(email));
        userModel.setPassword("");
        return userModel;
    }
}
