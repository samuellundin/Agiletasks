package com.agiletasks.model;

import com.agiletasks.entity.Project;
import com.agiletasks.entity.Task;
import com.agiletasks.entity.User;

import java.util.HashSet;
import java.util.Set;

public class ProjectModel {

    private Long id;
    private String projectName;
    private String startDate;
    private String endDate;
    private Long createdById;
    private Set<TaskModel> taskList;
    private Set<UserModel> userList;

    public ProjectModel() {}

    public ProjectModel(Project project) {
        this.id = project.getId();
        this.projectName = project.getProjectName();
        this.startDate = project.getStartDate();
        this.endDate = project.getEndDate();
        this.createdById = project.getCreatedById();
        this.taskList = convertTasksToTaskModels(project.getTaskList());
        this.userList = convertUsersToUserModels(project.getUserList());
    }

    private Set<TaskModel> convertTasksToTaskModels(Set<Task> tasks) {
        Set<TaskModel> taskModels = new HashSet<>();
        for(Task task : tasks) {
            taskModels.add(new TaskModel(task));
        }
        return taskModels;
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

    public Set<TaskModel> getTaskList() {
        return taskList;
    }

    public void setTaskList(Set<TaskModel> taskList) {
        this.taskList = taskList;
    }

    public Set<UserModel> getUserList() {
        return userList;
    }

    public void setUserList(Set<UserModel> userList) {
        this.userList = userList;
    }
}
