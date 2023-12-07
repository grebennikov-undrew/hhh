package com.hhh.demo.repository;

import com.hhh.demo.entity.Tracking;
import com.hhh.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TrackingRepository extends JpaRepository<Tracking,Long> {

    // Найти отслеживания по идентификатору привычки пользователя
    List<Tracking> findByUserHabitId(Long userHabitId);
}
