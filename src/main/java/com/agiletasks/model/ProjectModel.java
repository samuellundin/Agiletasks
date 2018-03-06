package com.agiletasks.model;

import com.agiletasks.entity.Project;
import com.agiletasks.entity.User;

import java.util.ArrayList;
import java.util.List;

public class ProjectModel {

    private Long id;
    private String projectName;
    private String startDate;
    private String endDate;
    private Long createdById;
    private List<SprintModel> sprintList;
    private List<User> userList;

    public ProjectModel() {
    }

    public ProjectModel(Project project) {
        this.id = project.getId();
        this.projectName = project.getProjectName();
        this.startDate = project.getStartDate();
        this.endDate = project.getEndDate();
        this.createdById = project.getCreatedById();
        this.buildSprintList(project);
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


    public List<User> getUserList() {
        return userList;
    }

    public void setUserList(List<User> userList) {
        this.userList = userList;
    }

    private void buildSprintList(Project project) {
        if (project.getSprintList() == null) {
            return;
        }
        this.sprintList = new ArrayList<>();
        project.getSprintList().forEach(sprint -> this.sprintList.add(new SprintModel(sprint)));
    }

    public List<SprintModel> getSprintList() {
        return sprintList;
    }

    public void setSprintList(List<SprintModel> sprintList) {
        this.sprintList = sprintList;
    }

}
