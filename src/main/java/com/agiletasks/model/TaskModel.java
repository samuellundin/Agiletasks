package com.agiletasks.model;

import com.agiletasks.entity.Status;
import com.agiletasks.entity.Task;

public class TaskModel {

    private Long id;
    private String title;
    private String description;
    private Status status;
    private SprintModel sprintModel;
    private UserModel userModel;

    public TaskModel(Task task) {
        this.id = task.getId();
        this.title = task.getTitle();
        this.description = task.getDescription();
        this.status = task.getStatus();
        this.userModel = new UserModel(task.getUser());
    }

    public TaskModel() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public SprintModel getSprintModel() {
        return sprintModel;
    }

    public void setSprintModel(SprintModel sprintModel) {
        this.sprintModel = sprintModel;
    }

    public UserModel getUserModel() {
        return userModel;
    }

    public void setUserModel(UserModel userModel) {
        this.userModel = userModel;
    }
}
