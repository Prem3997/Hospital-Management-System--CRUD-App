package com.example.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.model.User;
import com.example.springboot.service.UserService;

@RestController
@RequestMapping("InterMountainApplication/user")
@CrossOrigin(origins = { "http://localhost:3000","http://10.46.34.59:3000/" })
public class UserController {
	
	@Autowired
	UserService userservice;

	
	@GetMapping("/{username}/{password}/")
	public ResponseEntity<User> isValidUser(@PathVariable("username") String username,@PathVariable("password") String password){
		System.out.println("User Controller Called");
		if(userservice.isValidUser(username, password)){
			return new ResponseEntity<User>(HttpStatus.OK);
		}
		else{
			return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
		}
		
	}

}
