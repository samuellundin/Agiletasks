package com.agiletasks.entity;

import com.agiletasks.model.SprintModel;
import com.agiletasks.model.TaskModel;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "sprints")
public class Sprint implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sprint_id")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "start_date")
    private String startDate;

    @Column(name = "end_date")
    private String endDate;

    @JoinColumn(name = "project_id", referencedColumnName = "id")
    private Long projectId;

    @OneToMany(cascade = CascadeType.ALL, mappedBy="sprintId")
    private Set<Task> taskList = new HashSet<>();

    public Sprint() {}

    public Sprint(SprintModel sprintModel) {
        this.title = sprintModel.getTitle();
        this.startDate = sprintModel.getStartDate();
        this.endDate = sprintModel.getEndDate();
        this.projectId = sprintModel.getProjectId();
        this.taskList = convertTaskModelsToTasks(sprintModel.getTaskList());
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

    public Set<Task> getTaskList() {
        return taskList;
    }

    public void setTaskList(Set<Task> taskList) {
        this.taskList = taskList;
    }
}
