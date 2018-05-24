package com.agiletasks.entity;

import com.agiletasks.model.ProjectModel;
import com.agiletasks.model.TaskModel;
import com.agiletasks.model.UserModel;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;


@Entity
@Table(name = "projects")
public class Project implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "project_name")
    private String projectName;

    @Column(name = "start_date")
    private String startDate;

    @Column(name = "end_date")
    private String endDate;

    @Column(name = "created_by")
    private Long createdById;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "projectId", orphanRemoval = true)
    private Set<Task> taskList = new HashSet<>();

    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(name = "project_user", joinColumns = @JoinColumn(name = "project_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"))
    private Set<User> userList = new HashSet<>();

    public Project() {}

    public Project(ProjectModel projectModel){
        this.id = projectModel.getId();
        this.projectName = projectModel.getProjectName();
        this.startDate = projectModel.getStartDate();
        this.endDate = projectModel.getEndDate();
        this.createdById = projectModel.getCreatedById();
        setTaskList(convertTaskModelsToTasks(projectModel.getTaskList()));
        setUserList(convertUserModelsToUsers(projectModel.getUserList()));
    }

    public Set<Task> convertTaskModelsToTasks(Set<TaskModel> taskModels) {
        Set<Task> tasks = new HashSet<>();
        for(TaskModel taskModel : taskModels) {
            tasks.add(new Task(taskModel));
        }
        return tasks;
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

    public Set<Task> getTaskList() {
        return taskList;
    }

    public void setTaskList(Set<Task> taskList) {
        this.taskList.clear();
        this.taskList.addAll(taskList);
    }

    public Set<User> getUserList() {
        return userList;
    }

    public void setUserList(Set<User> userList) {
        this.userList = userList;
    }
}
