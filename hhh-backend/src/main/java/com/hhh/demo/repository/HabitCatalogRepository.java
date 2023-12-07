package com.hhh.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HabitCatalogRepository extends JpaRepository<com.hhh.demo.entity.HabitCatalog,Long> {
}
