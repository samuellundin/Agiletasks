package com.agiletasks.service;

import com.agiletasks.entity.Project;
import com.agiletasks.entity.User;
import com.agiletasks.model.ProjectModel;
import com.agiletasks.repository.ProjectRepository;
import com.agiletasks.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final UsersRepository usersRepository;

    @Autowired
    public ProjectService(ProjectRepository projectRepository, UsersRepository usersRepository) {
        this.projectRepository = projectRepository;
        this.usersRepository = usersRepository;
    }

    public List<ProjectModel> getAllProjects() {
        List<Project> projects = projectRepository.findAll();
        return convertProjectsToProjectModels(projects);
    }

    public List<ProjectModel> getProjectsCreatedByUserId(Long userId) {
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

    public List<ProjectModel> getProjectsAvailableByUserId(Long userId) {
        List<Project> projects = projectRepository.findAllByCreatedById(userId);
        return convertProjectsToProjectModels(projects);
    }

    public List<ProjectModel> getAssignedProjectsByUserId(Long userId) {
        User user = usersRepository.getOne(userId);
        List<Project> projects = projectRepository.findAllByUserListContains(user);
        return convertProjectsToProjectModels(projects);
    }
}
