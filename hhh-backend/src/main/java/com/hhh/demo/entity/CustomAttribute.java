package com.hhh.demo.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "custom_attributes")
@Getter
@Setter
public class CustomAttribute {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long attribute_id;

    private String attribute_name;
}
