package com.agiletasks.model;

import com.agiletasks.entity.Project;
import com.agiletasks.entity.Sprint;

import java.util.List;

public class ProjectModel {

    private Long id;
    private String projectName;
    private String startDate;
    private String endDate;
    private Long createdById;
    private List<Sprint> sprintList;

    public ProjectModel() {}

    public ProjectModel(Project project) {
        this.id = project.getId();
        this.projectName = project.getProjectName();
        this.startDate = project.getStartDate();
        this.endDate = project.getEndDate();
        this.createdById = project.getCreatedById();
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
}
