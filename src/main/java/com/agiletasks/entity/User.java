package com.agiletasks.entity;

import com.agiletasks.model.ProjectModel;
import com.agiletasks.model.TaskModel;
import com.agiletasks.model.UserModel;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "users")
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "image")
    private String image;

    @ManyToMany(mappedBy = "userList")
    private Set<Project> projectList = new HashSet<>();

    public User() {}

    public User(UserModel userModel) {
        this.id = userModel.getId();
        this.email = userModel.getEmail();
        this.password = userModel.getPassword();
        this.firstName = userModel.getFirstName();
        this.lastName = userModel.getLastName();
        this.image = userModel.getImage();
        if(userModel.getProjectList() != null) {
            setProjectList(convertProjectModelsToProjects(userModel.getProjectList()));
        }
    }

    private Set<Project> convertProjectModelsToProjects(Set<ProjectModel> projectModels) {
        Set<Project> projects = new HashSet<>();
        for(ProjectModel projectModel : projectModels) {
            projects.add(new Project(projectModel));
        }
        return projects;
    }

    private Set<Task> convertTaskModelsToTasks(Set<TaskModel> taskModels) {
        Set<Task> tasks = new HashSet<>();
        for(TaskModel taskModel : taskModels) {
            tasks.add(new Task(taskModel));
        }
        return tasks;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Set<Project> getProjectList() {
        return projectList;
    }

    public void setProjectList(Set<Project> projectList) {
        this.projectList.clear();
        this.projectList.addAll(projectList);
    }

}
