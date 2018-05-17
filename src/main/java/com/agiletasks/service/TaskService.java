package com.agiletasks.service;

import com.agiletasks.entity.Task;
import com.agiletasks.entity.User;
import com.agiletasks.model.TaskModel;
import com.agiletasks.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    @Autowired
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public TaskModel getTaskById(Long id) {
        return new TaskModel(taskRepository.findOne(id));
    }

    public TaskModel createTask(TaskModel taskModel) {
        Task task = taskRepository.save(new Task(taskModel));
        return new TaskModel(task);
    }

    public TaskModel updateTask(TaskModel taskModel) {
        Task task = taskRepository.findOne(taskModel.getId());
        task.setTitle(taskModel.getTitle());
        task.setDescription(taskModel.getDescription());
        task.setStatus(taskModel.getStatus());
        task.setSprintId(taskModel.getSprintId());
        task.setAssigned(new User(taskModel.getAssigned()));
        return new TaskModel(taskRepository.save(task));
    }

    public void deleteTask(Long id) {
        taskRepository.delete(id);
    }

}
