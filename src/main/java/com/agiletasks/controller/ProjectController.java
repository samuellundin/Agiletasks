package com.agiletasks.controller;


import com.agiletasks.entity.Project;
import com.agiletasks.model.ProjectModel;
import com.agiletasks.model.UserModel;
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

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<ProjectModel>> getAllProject(){
        return new ResponseEntity<>(projectService.getAllProjects(), HttpStatus.OK);
    }


    @PostMapping("/new")
    public ResponseEntity<ProjectModel> createProject(@RequestBody ProjectModel projectModel){
        return new ResponseEntity<>(projectService.createProject(projectModel), HttpStatus.OK);
    }


    @GetMapping(value = "/{id}")
    public ResponseEntity<List<ProjectModel>> getProjectsByUserId(@PathVariable("id") Long userId) {
        return new ResponseEntity<>(projectService.getProjectsByUserId(userId), HttpStatus.OK);
    }

    @PutMapping("/save_userlist")
    public ResponseEntity<ProjectModel> saveUserListToProject(@RequestBody ProjectModel projectModel) {
        return new ResponseEntity<>(projectService.saveUserListToProject(projectModel), HttpStatus.OK);

    }
}
