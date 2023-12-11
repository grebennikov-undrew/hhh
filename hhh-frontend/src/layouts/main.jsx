// import React from "react";

// const Main = () => {
//     return <h1> Main Page</h1>;
// };

// export default Main;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const Main = () => {
  const pluses = [
    { title: 'Улучшенное физическое здоровье', icon: 'fa fa-heart' },
    { title: 'Повышенная энергия и выносливость', icon: 'fa fa-bolt' },
    { title: 'Лучшее настроение и меньше стресса', icon: 'fa fa-smile-o' },
    { title: 'Улучшенная концентрация и память', icon: 'fa fa-brain' },
    { title: 'Укрепление иммунной системы', icon: 'fa fa-shield' },
    { title: 'Улучшение сна и отдыха', icon: 'fa fa-moon-o' },
    { title: 'Снижение риска развития хронических заболеваний', icon: 'fa fa-medkit' },
    { title: 'Улучшение общего качества жизни', icon: 'fa fa-thumbs-up' },
  ];
  return (
    <Container fluid>
      <h1>Отслеживание здоровых привычек</h1>
      <Row>
        {pluses.map((plus, index) => (
          <Col key={index} md={3} style={{ marginBottom: '1rem' }}>
            <div style={plusStyle}>
              <i className={plus.icon}></i>
              <h3>{plus.title}</h3>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
const plusStyle = {
  width: '100%',
  height: '100%',
  backgroundColor: 'green',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
};
export default Main;