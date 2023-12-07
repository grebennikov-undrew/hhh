-- Пользователи
INSERT INTO users   (username, email, password) VALUES ('user1', 'user1@example.com', 'password1');
INSERT INTO users   (username, email, password) VALUES ('user2', 'user2@example.com', 'password2');
INSERT INTO users   (username, email, password) VALUES ('user3', 'user3@example.com', 'password3');

-- Справочник привычек

INSERT INTO habit_catalog (habit_name, description) VALUES ('Exercise', 'Regular physical exercise');
INSERT INTO habit_catalog (habit_name, description) VALUES  ('Reading', 'Daily reading habit');
INSERT INTO habit_catalog (habit_name, description) VALUES  ('Meditation', 'Mindfulness meditation');

-- Привычки пользователя
INSERT INTO user_habits (user_id, habit_id, start_date) VALUES  (1, 1, '2023-01-01');
INSERT INTO user_habits (user_id, habit_id, start_date) VALUES  (1, 2, '2023-02-01');
INSERT INTO user_habits (user_id, habit_id, start_date) VALUES  (2, 3, '2023-01-15');

-- Отслеживание
INSERT INTO tracking (user_habit_id, date, status) VALUES  (1, '2023-01-01', 'completed');
INSERT INTO tracking (user_habit_id, date, status) VALUES  (1, '2023-01-02', 'completed');
INSERT INTO tracking (user_habit_id, date, status) VALUES  (2, '2023-02-01', 'completed');
INSERT INTO tracking (user_habit_id, date, status) VALUES (3, '2023-01-15', 'in_progress');

-- Таблица Кастомных Атрибутов
INSERT INTO custom_attributes (attribute_name) VALUES  ('Duration');
INSERT INTO custom_attributes (attribute_name) VALUES  ('Pages Read');
INSERT INTO custom_attributes (attribute_name) VALUES  ('Minutes Meditated');
INSERT INTO custom_attributes (attribute_name) VALUES  ('Start date');

-- Таблица Деталей Отслеживания
INSERT INTO tracking_details (tracking_id, attribute_id, attribute_value) VALUES  (1, 1, '30');
INSERT INTO tracking_details (tracking_id, attribute_id, attribute_value) VALUES  (2, 1, '45');
INSERT INTO tracking_details (tracking_id, attribute_id, attribute_value) VALUES  (2, 2, '20');
INSERT INTO tracking_details (tracking_id, attribute_id, attribute_value) VALUES  (3, 3, '10');
INSERT INTO tracking_details (tracking_id, attribute_id, attribute_value) VALUES  (4, 1, '15');
INSERT INTO tracking_details (tracking_id, attribute_id, attribute_value) VALUES  (4, 2, '5');