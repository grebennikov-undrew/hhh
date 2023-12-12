import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Modal, Form, Card } from 'react-bootstrap';
import CustomAttributeCard from "./CustomAttributeCard";

const defaultNewAttribute = {attribute_name: "Новый атрибут", type: "CHECKBOX"}

function HabitCustomAttributes(props) {
    const {customAttributes, handleHabitChange} = props;
    const [newCustomAttributes, setNewCustomAttributes] = useState(null);

    useEffect(() => {
        setNewCustomAttributes(customAttributes)
    }, [customAttributes]);

    const handleAddAttribute = (e) => {
        e.preventDefault()
        const changedCustomAttributes = newCustomAttributes || []
        changedCustomAttributes.push(defaultNewAttribute)
        handleHabitChange("customAttributes", changedCustomAttributes)
    }

    const handleRemoveAttribute = (e, attribute) => {
        e.preventDefault()
        const changedCustomAttributes = newCustomAttributes || []
        
        handleHabitChange("customAttributes", changedCustomAttributes.filter(old => old.attribute_name !== attribute.attribute_name))
    }

    const handleChangeAttribute = (value) => {
        const oldCustomAttributes = newCustomAttributes || []
        const changedCustomAttributes = oldCustomAttributes.map(a => a.attribute_id === value.attribute_id ? value : a)
        handleHabitChange("customAttributes", changedCustomAttributes)
    }

    return (
        <>
            {newCustomAttributes && newCustomAttributes.map(customAttribute => {
                return <CustomAttributeCard customAttribute={customAttribute} handleChangeAttribute={handleChangeAttribute} handleRemoveAttribute={handleRemoveAttribute}/>
            })
            }
            <Button variant="light" onClick={handleAddAttribute}>Добавить атрибут</Button>
        </>
    )
}


export default HabitCustomAttributes;