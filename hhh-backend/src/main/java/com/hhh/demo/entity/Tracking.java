package com.hhh.demo.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "tracking")
@Getter
@Setter
public class Tracking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tracking_id;

    @ManyToOne
    @JoinColumn(name = "user_habit_id")
    private UserHabits userHabit;

    private LocalDate date;
    private String status;

    @OneToMany(mappedBy = "tracking", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<TrackingDetail> trackingDetails;
}
