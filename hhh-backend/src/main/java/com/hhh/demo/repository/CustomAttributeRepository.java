package com.hhh.demo.repository;

import com.hhh.demo.entity.CustomAttribute;
import com.hhh.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomAttributeRepository extends JpaRepository<CustomAttribute,Long> {
}