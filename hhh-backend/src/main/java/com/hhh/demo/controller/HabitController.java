package com.hhh.demo.controller;

import com.hhh.demo.entity.HabitCatalog;
import com.hhh.demo.entity.User;
import com.hhh.demo.service.HabitCatalogService;
import com.opencsv.exceptions.CsvValidationException;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/habit")
@CrossOrigin(origins = "http://localhost:3000")
public class HabitController {

    @Autowired
    private HabitCatalogService habitCatalogService;

    @Operation(summary = "Получить все сохраненные привычки")
    @GetMapping
    public ResponseEntity<List<HabitCatalog>> getAllHabits() {
        List<HabitCatalog> habits = habitCatalogService.findAll();
        return ResponseEntity.ok(habits);
    }

    @Operation(summary = "Сохранить/изменить привычку")
    @PostMapping
    public ResponseEntity<HabitCatalog> saveHabit(@RequestBody HabitCatalog habitCatalog) {
        HabitCatalog habit = habitCatalogService.saveAndAdd(habitCatalog);
        return ResponseEntity.ok(habit);
    }

    @Operation(summary = "Загрузить все привычки как csv")
    @PostMapping(value = "/upload", consumes = {"multipart/form-data"})
    public ResponseEntity<String> uploadCSVFile(@RequestParam("file") MultipartFile file) throws CsvValidationException {
        if (file.getOriginalFilename().endsWith(".csv")) {
            try {
                List<HabitCatalog> habitCatalogList = habitCatalogService.uploadHabitCatalog(file);

                return ResponseEntity.status(HttpStatus.OK).body("File uploaded successfully!");
            } catch (IOException e) {
                e.printStackTrace();
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error uploading the file!");
            }
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid file format. Please upload a CSV file.");
        }
    }
}
