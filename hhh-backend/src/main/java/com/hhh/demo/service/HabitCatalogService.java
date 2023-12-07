package com.hhh.demo.service;

import com.hhh.demo.entity.HabitCatalog;
import com.hhh.demo.repository.HabitCatalogRepository;
import com.opencsv.CSVReader;
import com.opencsv.CSVReaderBuilder;
import com.opencsv.exceptions.CsvValidationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class HabitCatalogService {

    @Autowired
    HabitCatalogRepository habitCatalogRepository;

    public List<HabitCatalog> findAll() {
        return habitCatalogRepository.findAll();
    }

    public List<HabitCatalog> uploadHabitCatalog(MultipartFile file) throws IOException, CsvValidationException {
        try (CSVReader csvReader = new CSVReaderBuilder(new InputStreamReader(file.getInputStream())).build()) {

            String[] headers = csvReader.readNext(); // Заголовок CSV-файла
            Map<String, Integer> headerMap = createHeaderMap(headers); // Создание карты заголовков

            String[] nextRecord;
            List<HabitCatalog> habitCatalogList = new ArrayList<>();

            while ((nextRecord = csvReader.readNext()) != null) {
                HabitCatalog habitCatalog = new HabitCatalog();

                // Проход по всем полям сущности и установка значений из CSV-файла
                for (Map.Entry<String, Integer> entry : headerMap.entrySet()) {
                    String fieldName = entry.getKey();
                    int columnIndex = entry.getValue();

                    if (fieldName.equalsIgnoreCase("habit_name")) {
                        habitCatalog.setHabit_name(nextRecord[columnIndex]);
                    } else if (fieldName.equalsIgnoreCase("description")) {
                        habitCatalog.setDescription(nextRecord[columnIndex]);
                    } else if (fieldName.equalsIgnoreCase("habit_id")) {
                        habitCatalog.setHabit_id(Long.valueOf(nextRecord[columnIndex]));
                    }
                }

                habitCatalogList.add(habitCatalog);
            }

            return habitCatalogRepository.saveAll(habitCatalogList);
        }
    }

    // Создание мапа заголовков для сопоставления полей сущности
    private Map<String, Integer> createHeaderMap(String[] headers) {
        Map<String, Integer> headerMap = new HashMap<>();

        for (int i = 0; i < headers.length; i++) {
            headerMap.put(headers[i].toLowerCase(), i);
        }

        return headerMap;
    }
}
