package com.hhh.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tracking_details")
@Getter
@Setter
public class TrackingDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long detail_id;

    @ManyToOne
    @JoinColumn(name = "tracking_id")
    @JsonIgnore
    private Tracking tracking;

    @ManyToOne
    @JoinColumn(name = "attribute_id")
    private CustomAttribute attribute;

    private String attribute_value;
}
