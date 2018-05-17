package com.agiletasks.model;

import com.agiletasks.entity.Project;
import com.agiletasks.entity.Sprint;
import com.agiletasks.entity.User;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class ProjectModel {

    private Long id;
    private String projectName;
    private String startDate;
    private String endDate;
    private Long createdById;
    private Set<SprintModel> sprintList;
    private Set<UserModel> userList;

    public ProjectModel() {}

    public ProjectModel(Project project) {
        this.id = project.getId();
        this.projectName = project.getProjectName();
        this.startDate = project.getStartDate();
        this.endDate = project.getEndDate();
        this.createdById = project.getCreatedById();
        this.sprintList = convertSprintsToSprintModels(project.getSprintList());
        this.userList = convertUsersToUserModels(project.getUserList());
    }

    private Set<SprintModel> convertSprintsToSprintModels(Set<Sprint> sprints) {
        Set<SprintModel> sprintModels = new HashSet<>();
        for(Sprint sprint : sprints) {
            sprintModels.add(new SprintModel(sprint));
        }
        return sprintModels;
    }

    private Set<UserModel> convertUsersToUserModels(Set<User> users) {
        Set<UserModel> userModels = new HashSet<>();
        for(User user : users) {
            userModels.add(new UserModel(user));
        }
        return userModels;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public Long getCreatedById() {
        return createdById;
    }

    public void setCreatedById(Long createdById) {
        this.createdById = createdById;
    }

    public Set<SprintModel> getSprintList() {
        return sprintList;
    }

    public void setSprintList(Set<SprintModel> sprintList) {
        this.sprintList = sprintList;
    }

    public Set<UserModel> getUserList() {
        return userList;
    }

    public void setUserList(Set<UserModel> userList) {
        this.userList = userList;
    }
}
