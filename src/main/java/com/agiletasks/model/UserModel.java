package com.agiletasks.model;

import com.agiletasks.entity.Project;
import com.agiletasks.entity.User;

import java.util.HashSet;
import java.util.Set;

public class UserModel {

    private Long id;
    private String email;
    private String firstName;
    private String lastName;
    private String password;
    private String image;
    private Set<ProjectModel> projectList;
    private Set<TaskModel> taskList;

    public UserModel() {}

    public UserModel(User user) {
        this.id = user.getId();
        this.email = user.getEmail();
        this.firstName = user.getFirstName();
        this.lastName = user.getLastName();
        this.password = user.getPassword();
        this.image = user.getImage();
    }

    private Set<ProjectModel> convertProjectsToProjectModels(Set<Project> projects) {
        Set<ProjectModel> projectModels = new HashSet<>();
        for(Project project : projects) {
            projectModels.add(new ProjectModel(project));
        }
        return projectModels;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Set<ProjectModel> getProjectList() {
        return projectList;
    }

    public void setProjectList(Set<ProjectModel> projectList) {
        this.projectList = projectList;
    }

    public Set<TaskModel> getTaskList() {
        return taskList;
    }

    public void setTaskList(Set<TaskModel> taskList) {
        this.taskList = taskList;
    }
}
