package com.hhh.demo.service;

import com.hhh.demo.entity.CustomAttribute;
import com.hhh.demo.repository.CustomAttributeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CustomAttributeService {

    private final CustomAttributeRepository customAttributeRepository;

    @Autowired
    public CustomAttributeService(CustomAttributeRepository customAttributeRepository) {
        this.customAttributeRepository = customAttributeRepository;
    }

    public List<CustomAttribute> getAllCustomAttributes() {
        return customAttributeRepository.findAll();
    }

    public Optional<CustomAttribute> getCustomAttributeById(Long id) {
        return customAttributeRepository.findById(id);
    }

    public CustomAttribute createCustomAttribute(CustomAttribute customAttribute) {
        return customAttributeRepository.save(customAttribute);
    }

    public void deleteCustomAttribute(Long id) {
        customAttributeRepository.deleteById(id);
    }
}

