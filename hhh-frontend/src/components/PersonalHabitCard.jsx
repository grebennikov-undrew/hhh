import React, { useEffect, useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import instance from "../axios";
import HeatMap from '../components/charts/Heatmap';
import { postData } from '../services/http.service';

const STATUSES = ["Выполнил","Частично"]

function PersonalHabitCard(props) {
    const {id, habit} = props
    const [trackings, setTrackings] = useState(null);
    const [showTrackingModal, setShowTrackingModal] = useState(false);
    const [tracking, setTracking] = useState({status: "completed", date: new Date(), userHabit:{id: id}});

    useEffect(() => {
        instance.get(`api/trackings/user-habit/${id}`)
            .then(response => {
                setTrackings(response.data);
            })
            .catch(error => console.error('Error fetching user data:', error));
    }, [id]);

    if (!trackings) {
        return <div>Loading...</div>;
    }

    const handleShowTrackingModal = () => setShowTrackingModal(true);
    const handleCloseTrackingModal = () => setShowTrackingModal(false);

    const handleTrackingDetails = (e, attribute_id) => {
        tracking["trackingDetails"] = tracking["trackingDetails"] || []
        tracking["trackingDetails"].push({attribute: {attribute_id: attribute_id}, attribute_value:e.target.value.toString()})
    }

    const handleSaveTracking = async (e) => {
        e.preventDefault();
        try {
          const response = await postData(`api/trackings`,tracking);
          instance.get(`api/trackings/user-habit/${id}`)
            .then(response => {
                setTrackings(response.data);
                handleCloseTrackingModal();
            })
            .catch(error => console.error('Error fetching user data:', error));
        } catch (error) {
          console.error('Ошибка:', error);
        }
    };

    const {habit_name, description, customAttributes} = props

    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>{habit_name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <HeatMap actualValues={trackings.map(t => { return {"date": t.date}})}/>
                    
                </Card.Body>
                <Card.Footer>
                    <Button variant="outline-primary" onClick={handleShowTrackingModal}>Сделать запись</Button>
                </Card.Footer>
            </Card>


            <Modal show={showTrackingModal} onHide={handleCloseTrackingModal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {habit_name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formUsername">
                            <Form.Label>Введите дату</Form.Label>
                            <div>
                                <DatePicker selected={tracking.date} onChange={(date) => setTracking({...tracking, date: date})} />
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Статус</Form.Label>
                            <Form.Select 
                                aria-label="Default select example" 
                                placeholder="Выберите..." 
                                onChange={(e) => setTracking({...tracking, status: e.target.value})}>
                                {STATUSES.map(t => {
                                    return <option value={t}>{t}</option>
                                })}
                            </Form.Select>
                        </Form.Group>
                        {customAttributes && customAttributes.map(attr => 
                            <AttributeForm {...attr} handleTrackingDetails={handleTrackingDetails}/>
                        )}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseTrackingModal}>
                        Назад
                    </Button>
                    <Button variant="primary" onClick={handleSaveTracking}>
                        Сохранить
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
        
    )
}

function AttributeForm(props) {
    const {attribute_id, attribute_name, type, handleTrackingDetails} = props

    if (type === "NUMBER")
        return (
            <Form.Group className="mb-3">
                <Form.Label>{attribute_name}</Form.Label>
                <Form.Control type='number' onChange={e => handleTrackingDetails(e, attribute_id)}/>
            </Form.Group>
        )
    else if (type === "CHECKBOX") 
        return (
            <Form.Group className="mb-3">
                <Form.Label>{attribute_name}</Form.Label>
                <Form.Check type="checkbox" onChange={e => handleTrackingDetails(e, attribute_id)}/>
            </Form.Group>
        )
    else if (type === "TEXT") 
        return (
            <Form.Group className="mb-3">
                <Form.Label>{attribute_name}</Form.Label>
                <Form.Control type='input' onChange={e => handleTrackingDetails(e, attribute_id)}/>
            </Form.Group>
        )
}

export default PersonalHabitCard;