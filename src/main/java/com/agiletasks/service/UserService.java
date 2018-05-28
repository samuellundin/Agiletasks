package com.agiletasks.service;

import com.agiletasks.entity.Project;
import com.agiletasks.entity.User;
import com.agiletasks.model.UserModel;
import com.agiletasks.repository.ProjectRepository;
import com.agiletasks.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    private final UsersRepository userRepository;
    private final ProjectRepository projectRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public UserService(UsersRepository userRepository, ProjectRepository projectRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.projectRepository = projectRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    public List<UserModel> getAllUsers() {
        List<User> users = userRepository.findAll();
        List<UserModel> userModels = new ArrayList<>();
        for(User user: users) {
            UserModel model = new UserModel(user);
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
        return userModel;
    }

    public UserModel updateUser(UserModel userModel){
        User oldUser = userRepository.findOne(userModel.getId());
        oldUser.setEmail(userModel.getEmail());
        oldUser.setFirstName(userModel.getFirstName());
        oldUser.setLastName(userModel.getLastName());
        oldUser.setImage(userModel.getImage());
        userRepository.save(oldUser);
        return new UserModel(oldUser);
    }

    public UserModel changePassword(UserModel userModel) {
        User oldUser = userRepository.findOne(userModel.getId());
        oldUser.setPassword(bCryptPasswordEncoder.encode(userModel.getPassword()));
        userRepository.save(oldUser);
        return new UserModel(oldUser);
    }

    public List<UserModel> getUsersByProjectId(Long id) {
        Project project = projectRepository.findOne(id);
        List<User> users = userRepository.findAllByProjectListContains(project);
        return convertUsersToUserModels(users);
    }

    private List<UserModel> convertUsersToUserModels(List<User> users) {
        List<UserModel> userModels = new ArrayList<>();
        for(User user: users) {
            userModels.add(new UserModel(user));
        }
        return userModels;
    }
}
