package com.agiletasks.service;

import com.agiletasks.entity.Project;
import com.agiletasks.model.ProjectModel;
import com.agiletasks.model.UserModel;
import com.agiletasks.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
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


    public List<ProjectModel> getAllProjects(){
        List<Project> projects = projectRepository.findAll();
        List<ProjectModel> projectModels = new ArrayList<>();
        for(Project project: projects){
            projectModels.add(new ProjectModel(project));
        }
        return projectModels;
    }
}