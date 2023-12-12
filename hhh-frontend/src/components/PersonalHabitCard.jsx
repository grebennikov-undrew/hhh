import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

import instance from "../axios";
import HeatMap from '../components/charts/Heatmap';

function PersonalHabitCard(props) {
    const {id, habit} = props
    const [trackings, setTrackings] = useState(null);

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

    const {habit_name, description} = props

    return (
        <Card>
            <Card.Body>
                <Card.Title>{habit_name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <HeatMap actualValues={trackings.map(t => { return {"date": t.date}})}/>
            </Card.Body>
        </Card>
    )
}

export default PersonalHabitCard;