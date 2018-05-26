package com.agiletasks.repository;

import com.agiletasks.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {

    List<Project> findAllByCreatedById(Long userId);


    List<Project> findAllByUserList(Long userId);

}
