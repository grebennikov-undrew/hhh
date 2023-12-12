import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import instance from '../axios';
import { Card, Button, Container, Row, Col, Modal, Form } from 'react-bootstrap';
import HeatMap from '../components/charts/Heatmap';
import PersonalHabitCard from '../components/PersonalHabitCard';
import { getData, postData, updateData, deleteData } from '../services/http.service';

function UserProfile() {
    const params = useParams();
    const [user, setUser] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getData(`api/users/${params.id}`);
            setUser(response);
            console.log(response)
        };
        fetchData();
    }, [params.id]);

    const handleShowEditModal = () => setShowEditModal(true);
    const handleCloseEditModal = () => setShowEditModal(false);

    const handleSave = async (e) => {
        e.preventDefault();
        try {
          const response = await updateData(`api/users/${params.id}`,user);
          setUser(response)
          handleCloseEditModal();
        } catch (error) {
          console.error('Ошибка:', error);
        }
      };

    const handleUserDataEdit = (value, field) => {
        setUser({...user, [field]: value})
    }

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Container>
                <Row className="mb-4">
                    <Col xs={12} md={3} className="d-flex justify-content-center">
                        <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'grey', margin: 'auto' }}></div>
                    </Col>
                    <Col xs={12} md={9} lg={3} className="d-flex flex-column justify-content-center">
                        <h2>{user.username}</h2>
                        <p>{user.email}</p>
                        <Button variant="primary" onClick={handleShowEditModal}>Редактировать</Button>
                    </Col>
                </Row>
                <Row>
                    {user.userHabits.map(habit => (
                        <Col xs={12} md={12} lg={6} key={habit.id} className="mb-3">
                            <PersonalHabitCard {...habit.habit} id={habit.id}/>
                            {/* <Card>
                                <Card.Body>
                                    <Card.Title>{habit.habit.habit_name}</Card.Title>
                                    <Card.Text>
                                        {habit.habit.description}
                                    </Card.Text>
                                    <HeatMap/>
                                </Card.Body>
                            </Card> */}
                        </Col>
                    ))}
                    <Button variant="light">Добавить</Button>
                </Row>
            </Container>
            <Modal show={showEditModal} onHide={handleCloseEditModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Редактировать профиль</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formUsername">
                            <Form.Label>Имя пользователя</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Имя пользователя"
                            value={user.username}
                            onChange={(e) => handleUserDataEdit(e.target.value, "username")}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                            type="email"
                            placeholder="Email"
                            value={user.email}
                            onChange={(e) => handleUserDataEdit(e.target.value, "email")}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEditModal}>
                        Назад
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Сохранить
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
        
        
    );
}

export default UserProfile;
