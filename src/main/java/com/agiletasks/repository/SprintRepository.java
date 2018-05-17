package com.agiletasks.repository;

import com.agiletasks.entity.Sprint;
import org.springframework.data.repository.CrudRepository;

public interface SprintRepository extends CrudRepository<Sprint, Long> {
}
