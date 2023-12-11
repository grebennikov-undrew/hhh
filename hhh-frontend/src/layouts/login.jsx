// import React from "react";

// const Login = () => {
//     return (
//         <div>
//             <h1>Мы на странице регистрации</h1>
//         </div>
//     )
// };

// export default Login;

import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
const Login = () => {
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [showRegistrationFields, setShowRegistrationFields] = useState(false);
  const [registrationForm, setRegistrationForm] = useState({ email: '', password: '', confirmPassword: '' });
  const handleLoginChange = (event) => {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
  };
  const handleRegistrationChange = (event) => {
    setRegistrationForm({ ...registrationForm, [event.target.name]: event.target.value });
  };
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Отправка формы авторизации на сервер
    console.log('Отправлен запрос на авторизацию:', loginForm);
  };
  const handleRegistrationSubmit = (event) => {
    event.preventDefault();
    // Отправка формы регистрации на сервер
    console.log('Отправлен запрос на регистрацию:', registrationForm);
  };
  const handleShowRegistrationFields = () => {
    setShowRegistrationFields(true);
  };
  return (
    <Container>
      <h1>Авторизация</h1>
      <Form onSubmit={handleLoginSubmit}>
        <Form.Group controlId="emailLogin">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="Введите email" value={loginForm.email} onChange={handleLoginChange} required />
        </Form.Group>
        <Form.Group controlId="passwordLogin">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" name="password" placeholder="Введите пароль" value={loginForm.password} onChange={handleLoginChange} required />
        </Form.Group>
        {!showRegistrationFields && (
          <Button variant="primary" type="submit">Войти</Button>
        )}
        {!showRegistrationFields && (
          <Button variant="link" onClick={handleShowRegistrationFields}>Зарегистрироваться</Button>
        )}
      </Form>
      {showRegistrationFields && (
        <>
          <h1>Регистрация</h1>
          <Form onSubmit={handleRegistrationSubmit}>
            <Form.Group controlId="emailRegistration">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" placeholder="Введите email" value={registrationForm.email} onChange={handleRegistrationChange} required />
            </Form.Group>
            <Form.Group controlId="passwordRegistration">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" name="password" placeholder="Введите пароль" value={registrationForm.password} onChange={handleRegistrationChange} required />
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Подтвердите пароль</Form.Label>
              <Form.Control type="password" name="confirmPassword" placeholder="Подтвердите пароль" value={registrationForm.confirmPassword} onChange={handleRegistrationChange} required />
            </Form.Group>
            <Button variant="primary" type="submit">Зарегистрироваться</Button>
          </Form>
        </>
      )}
    </Container>
  );
};
export default Login;
