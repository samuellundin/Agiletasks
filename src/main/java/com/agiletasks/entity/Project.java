package com.agiletasks.entity;

import com.agiletasks.model.ProjectModel;
import com.agiletasks.model.SprintModel;
import com.agiletasks.model.UserModel;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Entity
@Table(name = "projects")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "project_id")
    private Long id;

    @Column(name = "project_name")
    private String projectName;

    @Column(name = "start_date")
    private String startDate;

    @Column(name = "end_date")
    private String endDate;

    @Column(name = "created_by")
    private Long createdById;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "projectId")
    private Set<Sprint> sprintList = new HashSet<>();

    @ManyToMany(mappedBy = "projectList")
    private Set<User> userList = new HashSet<>();

    public Project() {}

    public Project(ProjectModel projectModel){
        this.id = projectModel.getId();
        this.projectName = projectModel.getProjectName();
        this.startDate = projectModel.getStartDate();
        this.endDate = projectModel.getEndDate();
        this.createdById = projectModel.getCreatedById();

        if(projectModel.getSprintList() != null){
            this.sprintList = convertSprintModelsToSprints(projectModel.getSprintList());
        }
        if(projectModel.getUserList() != null){
            this.userList = convertUserModelsToUsers(projectModel.getUserList());
        }

    }

    public Set<Sprint> convertSprintModelsToSprints(Set<SprintModel> sprintModels) {
        Set<Sprint> sprints = new HashSet<>();
        for(SprintModel sprintModel : sprintModels) {
            sprints.add(new Sprint(sprintModel));
        }
        return sprints;
    }

    public Set<User> convertUserModelsToUsers(Set<UserModel> userModels) {
        Set<User> users = new HashSet<>();
        for(UserModel userModel : userModels) {
            users.add(new User(userModel));
        }
        return users;
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

    public Set<Sprint> getSprintList() {
        return sprintList;
    }

    public void setSprintList(Set<Sprint> sprintList) {
        this.sprintList = sprintList;
    }

    public Set<User> getUserList() {
        return userList;
    }

    public void setUserList(Set<User> userList) {
        this.userList = userList;
    }
}
