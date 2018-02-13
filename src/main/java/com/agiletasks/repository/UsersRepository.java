package com.agiletasks.repository;

import com.agiletasks.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);

}
