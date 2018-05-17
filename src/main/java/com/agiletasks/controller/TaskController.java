package com.agiletasks.controller;

import com.agiletasks.model.TaskModel;
import com.agiletasks.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/tasks")
public class TaskController {

    private final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<TaskModel> getTaskById(@PathVariable("id") Long id) {
        return new ResponseEntity<>(taskService.getTaskById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<TaskModel> createTask(@RequestBody TaskModel taskModel) {
        return new ResponseEntity<>(taskService.createTask(taskModel), HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<TaskModel> updateTask(@RequestBody TaskModel taskModel) {
        return new ResponseEntity<>(taskService.updateTask(taskModel), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable("id") Long id) {
        taskService.deleteTask(id);
    }

}
