package com.hhh.demo.security;

import java.util.Map;

public class GoogleUserInfo {

    private Map<String, Object> attributes;

    public GoogleUserInfo(Map<String, Object> attributes) {
        this.attributes = attributes;
    }

    public String getId() {
        return (String) attributes.get("openid");
    }

    public String getName() {
        return (String) attributes.get("email");
    }

    public String getEmail() {
        return (String) attributes.get("email");
    }
}
