// import React, { useState } from 'react';
// import { Card, ListGroup, Button, Modal, Form, Container, Row, Col } from 'react-bootstrap';
// const UserPage = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [editHabit, setEditHabit] = useState(null);
//   const [userData, setUserData] = useState({
//     user_id: 0,
//     username: "JohnDoe",
//     email: "johndoe@example.com",
//     userHabits: [
//       {
//         id: 0,
//         habit: {
//           habit_id: 0,
//           habit_name: "Exercise",
//           description: "Do exercise daily"
//         },
//         start_date: "2023-12-11"
//       },
//       // Дополнительные привычки могут быть добавлены здесь
//     ]
//   });
//   const handleEditHabit = (habit) => {
//     setEditHabit(habit);
//     setShowModal(true);
//   };
//   const handleCloseModal = () => {
//     setShowModal(false);
//     setEditHabit(null);
//   };
//   const handleSaveHabit = () => {
//     // Найти индекс привычки в массиве и обновить данные
//     const updatedUserHabits = userData.userHabits.map((userHabit) => {
//       if (userHabit.id === editHabit.id) {
//         return {
//           ...userHabit,
//           habit: {
//             ...userHabit.habit,
//             habit_name: document.getElementById("habitName").value,
//             description: document.getElementById("habitDescription").value
//           }
//         };
//       }
//       return userHabit;
//     });
//     setUserData({ ...userData, userHabits: updatedUserHabits });
//     setShowModal(false);
//     setEditHabit(null);
//   };
//   return (
//     <Container fluid>
//       <h1>Профиль пользователя</h1>
//       <h2>Информация о пользователе</h2>
//       <Card style={{ width: '18rem' }}>
//         <ListGroup variant="flush">
//           <ListGroup.Item>Имя пользователя: {userData.username}</ListGroup.Item>
//           <ListGroup.Item>Email: {userData.email}</ListGroup.Item>
//         </ListGroup>
//       </Card>
//       <h2>Привычки пользователя</h2>
//       <Row>
//         {userData.userHabits.map((userHabit) => (
//           <Col key={userHabit.id} md={4} style={{ marginBottom: '1rem' }}>
//             <Card>
//               <Card.Body>
//                 <Card.Title>{userHabit.habit.habit_name}</Card.Title>
//                 <Card.Text>Описание: {userHabit.habit.description}</Card.Text>
//                 <Card.Text>Дата начала: {userHabit.start_date}</Card.Text>
//                 <Button variant="primary" onClick={() => handleEditHabit(userHabit)}>Редактировать</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Редактировать привычку</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="habitName">
//               <Form.Label>Название привычки</Form.Label>
//               <Form.Control type="text" placeholder="Введите название привычки" defaultValue={editHabit && editHabit.habit.habit_name} />
//             </Form.Group>
//             <Form.Group controlId="habitDescription">
//               <Form.Label>Описание привычки</Form.Label>
//               <Form.Control as="textarea" rows={3} placeholder="Введите описание привычки" defaultValue={editHabit && editHabit.habit.description} />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>Отмена</Button>
//           <Button variant="primary" onClick={handleSaveHabit}>Сохранить</Button>
//         </Modal.Footer>
//       </Modal>
//     </Container>
//   );
// };
// export default UserPage;

import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getData } from '../services/http.service'
const UserPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getData();
      setData(response);
      // console.log(response)
      response.map((item) => {
        item.userHabits.map((habit) => (
          console.log(habit.description)
        ))
      })
    };
    fetchData();

  }, []);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Имя</th>
          <th>email</th>
          <th>Привычки</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.user_id}>
            <td>{item.username}</td>
            <td>{item.email}</td>
            {/* <td>{item.}</td> */}
            {/* Добавьте другие необходимые ячейки */}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default UserPage;