package com.agiletasks.controller;

import com.agiletasks.model.SprintModel;
import com.agiletasks.service.SprintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/sprints")
public class SprintController {

    private final SprintService sprintService;

    @Autowired
    public SprintController(SprintService sprintService) {
        this.sprintService = sprintService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<SprintModel> getSprintById(@PathVariable("id") Long id) {
        return new ResponseEntity<>(sprintService.getSprintById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<SprintModel> createSprint(@RequestBody SprintModel sprintModel) {
        return new ResponseEntity<>(sprintService.createSprint(sprintModel), HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<SprintModel> updateSprint(@RequestBody SprintModel sprintModel) {
        return new ResponseEntity<>(sprintService.updateSprint(sprintModel), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public void deleteSprint(@PathVariable("id") Long id) {
        sprintService.deleteSprint(id);
    }

}
