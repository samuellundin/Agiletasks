package com.agiletasks.repository;

import com.agiletasks.entity.Project;
import com.agiletasks.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UsersRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);

    List<User> findAllByProjectListContains(Project project);

}
