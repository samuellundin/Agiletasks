package com.agiletasks.service;

import com.agiletasks.entity.Project;
import com.agiletasks.model.ProjectModel;
import com.agiletasks.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    @Autowired
    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<ProjectModel> getAllProjects() {
        List<Project> projects = projectRepository.findAll();
        return convertProjectsToProjectModels(projects);
    }

    public List<ProjectModel> getProjectsByUserId(Long userId) {
        List<Project> projects = projectRepository.findAllByCreatedById(userId);
        return convertProjectsToProjectModels(projects);
    }

    public ProjectModel createProject(ProjectModel projectModel) {
        Project project = projectRepository.save(new Project(projectModel));
        return new ProjectModel(project);
    }

    public ProjectModel updateProject(ProjectModel projectModel) {
        Project project = projectRepository.findOne(projectModel.getId());
        project.setProjectName(projectModel.getProjectName());
        project.setCreatedById(projectModel.getCreatedById());
        project.setStartDate(projectModel.getStartDate());
        project.setEndDate(projectModel.getEndDate());
        project.setTaskList(project.convertTaskModelsToTasks(projectModel.getTaskList()));
        project.setUserList(project.convertUserModelsToUsers(projectModel.getUserList()));
        return new ProjectModel(projectRepository.save(project));
    }

    public void deleteProject(Long id) {
        projectRepository.delete(id);
    }

    private List<ProjectModel> convertProjectsToProjectModels(List<Project> projects) {
        List<ProjectModel> projectModels = new ArrayList<>();
        for (Project project : projects) {
            projectModels.add(new ProjectModel(project));
        }
        return projectModels;
    }

    public ProjectModel getProjectById(Long id) {
        return new ProjectModel(projectRepository.findOne(id));
    }
}
