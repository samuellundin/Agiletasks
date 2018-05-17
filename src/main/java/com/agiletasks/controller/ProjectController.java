package com.agiletasks.controller;


import com.agiletasks.model.ProjectModel;
import com.agiletasks.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/projects")
public class ProjectController {


    private final ProjectService projectService;

    @Autowired
    public ProjectController(ProjectService projectService){
        this.projectService = projectService;
    }

    @GetMapping
    public ResponseEntity<List<ProjectModel>> getAllProject(){
        return new ResponseEntity<>(projectService.getAllProjects(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ProjectModel> createProject(@RequestBody ProjectModel projectModel){
        return new ResponseEntity<>(projectService.createProject(projectModel), HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<ProjectModel> updateProject(@RequestBody ProjectModel projectModel) {
        return new ResponseEntity<>(projectService.updateProject(projectModel), HttpStatus.OK);
    }

    @GetMapping(value = "/all/{id}")
    public ResponseEntity<List<ProjectModel>> getProjectsByUserId(@PathVariable("id") Long userId) {
        return new ResponseEntity<>(projectService.getProjectsByUserId(userId), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<ProjectModel> getProjectById(@PathVariable("id") Long id) {
        return new ResponseEntity<>(projectService.getProjectById(id), HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteProject(@PathVariable("id") Long id) {
        projectService.deleteProject(id);
    }

}
