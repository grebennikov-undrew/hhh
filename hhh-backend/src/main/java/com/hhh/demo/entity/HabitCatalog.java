package com.hhh.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "habit_catalog")
public class HabitCatalog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long habit_id;

    private String habit_name;
    private String description;


}
