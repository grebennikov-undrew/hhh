package com.hhh.demo.repository;

import com.hhh.demo.entity.User;
import com.hhh.demo.entity.UserHabits;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserHabitsRepository extends JpaRepository<UserHabits,Long> {
}
