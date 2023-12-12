package com.hhh.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

enum CustomAttributeType {

    DATE ("date"),
    NUMBER ("number"),
    SELECT ("select"),
    CHECKBOX ("checkbox"),
    TEXT ("text");

    private String type;

    CustomAttributeType(String type) {
        this.type = type;
    }

    public String getStoredValue() {
        return type;
    }
}
