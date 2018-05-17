package com.agiletasks.model;

import com.agiletasks.entity.Sprint;
import com.agiletasks.entity.Task;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class SprintModel {

    private Long id;
    private String title;
    private String startDate;
    private String endDate;
    private Long projectId;
    private Set<TaskModel> taskList;

    public SprintModel(Sprint sprint) {
        this.id = sprint.getId();
        this.title = sprint.getTitle();
        this.startDate = sprint.getStartDate();
        this.endDate = sprint.getEndDate();
        this.projectId = sprint.getProjectId();
        this.taskList = convertTasksToTaskModels(sprint.getTaskList());
    }

    private Set<TaskModel> convertTasksToTaskModels(Set<Task> tasks) {
        Set<TaskModel> taskModels = new HashSet<>();
        for(Task task : tasks) {
            taskModels.add(new TaskModel(task));
        }
        return taskModels;
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

    public Long getProjectId() {
        return projectId;
    }

    public void setProjectId(Long projectId) {
        this.projectId = projectId;
    }

    public Set<TaskModel> getTaskList() {
        return taskList;
    }

    public void setTaskList(Set<TaskModel> taskList) {
        this.taskList = taskList;
    }
}
