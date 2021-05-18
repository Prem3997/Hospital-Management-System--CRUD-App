package com.example.springboot;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class HelloController {

	@RequestMapping("/hello2")
	public String index() {
		System.out.println("Controller Called");
		return "Greetings from Spring Boot!";
	}

}
