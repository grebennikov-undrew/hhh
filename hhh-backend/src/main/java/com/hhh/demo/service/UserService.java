package com.hhh.demo.service;

import com.hhh.demo.entity.HabitCatalog;
import com.hhh.demo.entity.User;
import com.hhh.demo.entity.UserHabits;
import com.hhh.demo.repository.UserHabitsRepository;
import com.hhh.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserHabitsRepository userHabitsRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long userId) {
        Optional<User> userOptional = userRepository.findById(userId);
        return userOptional.orElse(null);
    }

    public User createUser(User user) {
        // Можно добавить логику проверки уникальности или другие правила перед сохранением
        return userRepository.save(user);
    }

    public User updateUser(Long userId, User newUser) {
        Optional<User> existingUserOptional = userRepository.findById(userId);

        if (existingUserOptional.isPresent()) {
            User existingUser = existingUserOptional.get();
            existingUser.setUsername(newUser.getUsername());
            existingUser.setEmail(newUser.getEmail());
            existingUser.setPassword(newUser.getPassword());

            return userRepository.save(existingUser);
        }

        return null;
    }

    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }

    @Transactional
    public void addHabit(Long userId, HabitCatalog newHabit) {
        User foundUser = userRepository.findById(userId).get();
        UserHabits newUserHabit = new UserHabits();
        newUserHabit.setUser(foundUser);
        newUserHabit.setHabit(newHabit);
        newUserHabit.setStart_date(LocalDate.now());
        userHabitsRepository.save(newUserHabit);

    }
}

