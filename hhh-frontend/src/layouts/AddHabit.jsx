import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Modal, Form } from 'react-bootstrap';
import { getData, postData, updateData } from "../services/http.service";
import { useNavigate, useParams } from "react-router-dom";

import HabitCustomAttributes from "../components/HabitCustomAttributes";

const newHabit = {habit_id: "0", habit_name: "Своя привычка", description: "Добавьте описание..."}

function AddHabit () {
    const params = useParams();
    const navigate = useNavigate();
    const [habits, setHabits] = useState(null);
    const [habit, setHabit] = useState(newHabit)
    const [changed, setChanged] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await getData(`api/habit`);
            setHabits(response);
            console.log(response)
        };
        fetchData();
    }, []);

    const handleSelectChange = (e) => {
        e.preventDefault()
        const selectedHabit = habits.find(h => `${h.habit_id}` === `${e.target.value}`) || newHabit 
        setHabit(selectedHabit)
    }

    const handleSave = async (e) => {
        e.preventDefault();
        const subitData = habit;
        // Если новая привычка - сбрасываем ID, чтобы на бэкенде выдался новый
        if (subitData.habit_id === '0' || subitData.habit_id === 0) {
            delete subitData.habit_id
        }
        subitData.customAttributes = habit.customAttributes.map(c => {
            delete c.attribute_id
            return c
        })
        try {
            const response = await postData(`api/habit`,habit);
            setHabit(response)
            navigate(`/profile/${params.id}`)
            
        } catch (error) {
            console.error('Ошибка:', error);
        }
    };

    const handleHabitChange = (attribute, value) => {
        const changedHabit = {...habit, [attribute]: value, habit_id: 0}
        setHabit(changedHabit)
    }

    if (!habits) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Container>
                <Row className="mb-4">
                    <h2>Добавить привычку</h2>
                    <p>Вы можете выбрать привычку или добавить свою</p>
                    <Col xs={12} md={9} lg={6} className="d-flex flex-column ">
                        <SelectHabits habit={habit} habits={habits} handleSelectChange={handleSelectChange}/>
                        <HabitCustomAttributes customAttributes={habit && habit.customAttributes} handleHabitChange={handleHabitChange}/>
                    </Col>
                    <Col xs={12} md={3} lg={6} >
                        {<CustomName habitId={habit.habit_id} habitName={habit.habit_name} handleHabitChange={handleHabitChange}/>}
                        {<Description habitId={habit.habit_id} description={habit.description} handleHabitChange={handleHabitChange}/>}
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col xs={12} md={9} lg={6} className="d-flex flex-column justify-content-center">
                        <Button variant="primary" onClick={handleSave}>Сохранить</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

function CustomName(props) {
    const {habitId, habitName, handleHabitChange} = props

    // if (habitId !== "0" && habitId !== 0) return
    return (
        <Form.Group className="mb-3" controlId="customAttribyteType">
            <Form.Label>Название</Form.Label>
            <Form.Control aria-label="Default select example" placeholder="Введите..." isInvalid={!habitName} value={habitName} onChange={(e) => handleHabitChange("habit_name", e.target.value)}/>
        </Form.Group>
    )
}

function Description(props) {
    const {habitId, description, handleHabitChange} = props
    // if (habitId == "0" && habitId == 0) 
        return (
            <>
                <Form.Label>Описание</Form.Label>
                <Form.Control as="textarea" rows={3} value={description} onChange={(e) => handleHabitChange("description", e.target.value)}/>
            </>
            )
    // return (
    //     <>
    //         <Form.Label>Описание</Form.Label>
    //         <p>{description}</p>
    //     </>
    // )
}

function SelectHabits(props) {
    const {habit, habits, handleSelectChange} = props
    return (
        <Form.Group className="mb-3" controlId="habit">
            <Form.Label>Привычка</Form.Label>
            <Form.Select aria-label="Default select example" placeholder="Выберите..." onChange={handleSelectChange} value={habit.habit_id}>
                <option value="0">Создать свою</option>
                {habits.map(h => {
                    return <option value={h.habit_id}>{h.habit_name}</option>
                })}
            </Form.Select>
        </Form.Group>
    )
}

export default AddHabit;