package com.hhh.demo;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@OpenAPIDefinition(
        info = @Info(
                title = "HHH",
                description = "Health Habits Hub", version = "0.0.1",
                contact = @Contact(
                        name = "Grebennikov Andrey",
                        email = "grebennikovas@yahoo.com",
                        url = "https://github.com/grebennikov-undrew"
                )
        )
)
public class OpenApiConfig {
}
