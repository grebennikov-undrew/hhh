package com.hhh.demo.service;

import com.hhh.demo.entity.Tracking;
import com.hhh.demo.repository.TrackingDetailRepository;
import com.hhh.demo.repository.TrackingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TrackingService {

    @Autowired
    private TrackingRepository trackingRepository;
    @Autowired
    private TrackingDetailRepository trackingDetailRepository;

    public List<Tracking> getTrackingsByUserHabit(Long userHabitId) {
        return trackingRepository.findByUserHabitId(userHabitId);
    }

    public Tracking getTrackingById(Long trackingId) {
        Optional<Tracking> trackingOptional = trackingRepository.findById(trackingId);
        return trackingOptional.orElse(null);
    }

    public Tracking createTracking(Tracking tracking) {
        // Можно добавить логику проверки перед сохранением
        return trackingRepository.save(tracking);
    }

    public Tracking updateTracking(Long trackingId, Tracking newTracking) {
        Optional<Tracking> existingTrackingOptional = trackingRepository.findById(trackingId);

        if (existingTrackingOptional.isPresent()) {
            Tracking existingTracking = existingTrackingOptional.get();
            // Обновление полей tracking, если это необходимо
            existingTracking.setDate(newTracking.getDate());
            existingTracking.setStatus(newTracking.getStatus());

            // Дополнительные поля, которые могут быть обновлены

            return trackingRepository.save(existingTracking);
        }

        return null; // или бросьте исключение, в зависимости от требований
    }

    public void deleteTracking(Long trackingId) {
        trackingRepository.deleteById(trackingId);
    }
}

