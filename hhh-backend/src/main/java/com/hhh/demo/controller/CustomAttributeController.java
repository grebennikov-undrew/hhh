package com.hhh.demo.controller;

import com.hhh.demo.entity.CustomAttribute;
import com.hhh.demo.service.CustomAttributeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/custom-attributes")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomAttributeController {

    private final CustomAttributeService customAttributeService;

    @Autowired
    public CustomAttributeController(CustomAttributeService customAttributeService) {
        this.customAttributeService = customAttributeService;
    }

    @GetMapping
    public ResponseEntity<List<CustomAttribute>> getAllCustomAttributes() {
        List<CustomAttribute> customAttributes = customAttributeService.getAllCustomAttributes();
        return new ResponseEntity<>(customAttributes, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CustomAttribute> getCustomAttributeById(@PathVariable Long id) {
        Optional<CustomAttribute> customAttribute = customAttributeService.getCustomAttributeById(id);
        return customAttribute.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<CustomAttribute> createCustomAttribute(@RequestBody CustomAttribute customAttribute) {
        CustomAttribute createdAttribute = customAttributeService.createCustomAttribute(customAttribute);
        return new ResponseEntity<>(createdAttribute, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCustomAttribute(@PathVariable Long id) {
        customAttributeService.deleteCustomAttribute(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

