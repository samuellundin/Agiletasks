package com.agiletasks.controller;


import com.agiletasks.model.ProjectModel;
import com.agiletasks.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/project")
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


}
