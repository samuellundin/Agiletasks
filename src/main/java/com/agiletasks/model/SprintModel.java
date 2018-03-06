package com.agiletasks.model;

import com.agiletasks.entity.Sprint;

import java.util.ArrayList;
import java.util.List;

public class SprintModel {

    private Long id;
    private String title;
    private String startDate;
    private String endDate;
    private ProjectModel projectModel;
    private List<TaskModel> taskList;

    public SprintModel(Sprint sprint) {
        this.id = sprint.getId();
        this.title = sprint.getTitle();
        this.startDate = sprint.getStartDate();
        this.endDate = sprint.getEndDate();
        this.buildTaskList(sprint);
    }

    public SprintModel() {}

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

    public ProjectModel getProjectModel() {
        return projectModel;
    }

    public void setProjectModel(ProjectModel projectModel) {
        this.projectModel = projectModel;
    }

    public List<TaskModel> getTaskList() {
        return taskList;
    }

    public void setTaskList(List<TaskModel> taskList) {
        this.taskList = taskList;
    }

    private void buildTaskList(Sprint sprint) {
        if (sprint.getTaskList() == null) {
            return;
        }
        this.taskList = new ArrayList<>();
        sprint.getTaskList().forEach(task -> this.taskList.add(new TaskModel(task)));
    }
}
