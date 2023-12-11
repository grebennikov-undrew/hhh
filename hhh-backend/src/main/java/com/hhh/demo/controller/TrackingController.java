package com.hhh.demo.controller;

import com.hhh.demo.entity.Tracking;
import com.hhh.demo.repository.TrackingDetailRepository;
import com.hhh.demo.service.TrackingService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trackings")
@CrossOrigin(origins = "http://localhost:3000")
public class TrackingController {

    @Autowired
    private TrackingService trackingService;

    @Operation(summary = "Получить все отслеживания для конкретного пользователя и привычки")
    @GetMapping("/user-habit/{userHabitId}")
    public ResponseEntity<List<Tracking>> getTrackingsByUserHabit(@PathVariable Long userHabitId) {
        List<Tracking> trackings = trackingService.getTrackingsByUserHabit(userHabitId);
        return ResponseEntity.ok(trackings);
    }

    @Operation(summary = "Получить отслеживание по ID")
    @GetMapping("/{trackingId}")
    public ResponseEntity<Tracking> getTrackingById(@PathVariable Long trackingId) {
        Tracking tracking = trackingService.getTrackingById(trackingId);
        return ResponseEntity.ok(tracking);
    }

    @Operation(summary = "Создать новое отслеживание привычки")
    @PostMapping
    public ResponseEntity<Tracking> createTracking(@RequestBody Tracking tracking) {
        Tracking createdTracking = trackingService.createTracking(tracking);
        return ResponseEntity.ok(createdTracking);
    }

    @Operation(summary = "Обновить отслеживание по ID")
    @PutMapping("/{trackingId}")
    public ResponseEntity<Tracking> updateTracking(@PathVariable Long trackingId, @RequestBody Tracking tracking) {
        Tracking updatedTracking = trackingService.updateTracking(trackingId, tracking);
        return ResponseEntity.ok(updatedTracking);
    }

    @Operation(summary = "Удалить отслеживание по ID")
    @DeleteMapping("/{trackingId}")
    public ResponseEntity<Void> deleteTracking(@PathVariable Long trackingId) {
        trackingService.deleteTracking(trackingId);
        return ResponseEntity.noContent().build();
    }
}

