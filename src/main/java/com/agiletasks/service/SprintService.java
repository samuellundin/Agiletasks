package com.agiletasks.service;

import com.agiletasks.entity.Sprint;
import com.agiletasks.model.SprintModel;
import com.agiletasks.repository.SprintRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SprintService {

    private final SprintRepository sprintRepository;

    @Autowired
    public SprintService(SprintRepository sprintRepository) {
        this.sprintRepository = sprintRepository;
    }

    public SprintModel createSprint(SprintModel sprintModel) {
        Sprint sprint = new Sprint(sprintModel);
        return new SprintModel(sprintRepository.save(sprint));
    }

    public SprintModel updateSprint(SprintModel sprintModel) {
        Sprint sprint = sprintRepository.findOne(sprintModel.getId());
        sprint.setTitle(sprintModel.getTitle());
        sprint.setStartDate(sprintModel.getStartDate());
        sprint.setEndDate(sprintModel.getEndDate());
        sprint.setTaskList(sprint.convertTaskModelsToTasks(sprintModel.getTaskList()));
        return new SprintModel(sprintRepository.save(sprint));
    }

    public void deleteSprint(Long id) {
        sprintRepository.delete(id);
    }

    public SprintModel getSprintById(Long id) {
        return new SprintModel(sprintRepository.findOne(id));
    }
}
