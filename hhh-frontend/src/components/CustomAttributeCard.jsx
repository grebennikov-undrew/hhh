import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col, Modal, Form, Card } from 'react-bootstrap';

const ATTR_TYPES = ["CHECKBOX", "NUMBER", "TEXT"]

function CustomAttributeCard(props) {
    const {customAttribute, handleChangeAttribute, handleRemoveAttribute} = props
    const [newCustomAttribute, setNewCustomAttribute] = useState(null)

    useEffect(() => {
        setNewCustomAttribute(customAttribute)
    }, [customAttribute]);

    const handleTypeChange = (e) => {
        e.preventDefault()
        const changedAttribute = {...newCustomAttribute, ["type"]: e.target.value}
        handleChangeAttribute(changedAttribute)
    }

    const handleNameChange = (e) => {
        e.preventDefault()
        const changedAttribute = {...newCustomAttribute, ["attribute_name"]: e.target.value}
        handleChangeAttribute(changedAttribute)
    }

    if (!newCustomAttribute) {
        return <div>Loading...</div>;
    }

    return (
        <Card className="mb-3">
            <Card.Body>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="customAttribyteType">
                            <Form.Control aria-label="Default select example" placeholder="Название..." onChange={handleNameChange} value={newCustomAttribute.attribute_name}/>
                        </Form.Group>
                    </Col>
                    <Col xs={3}>
                        <Form.Group className="mb-3" controlId="customAttribyteType">
                            <Form.Select aria-label="Default select example" placeholder="Выберите..." onChange={handleTypeChange} value={newCustomAttribute.type}>
                                {ATTR_TYPES.map(t => {
                                    return <option value={t}>{t}</option>
                                })}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col xs="auto">
                        <Button variant="outline-danger" color="warning" onClick={(e) => handleRemoveAttribute(e, newCustomAttribute)}>Удалить</Button>   
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default CustomAttributeCard;