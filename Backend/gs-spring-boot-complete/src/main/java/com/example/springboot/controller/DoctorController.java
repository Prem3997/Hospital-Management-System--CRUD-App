package com.example.springboot.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("InterMountainApplication/doctor")
@CrossOrigin(origins = { "http://localhost:3000","http://10.46.34.59:3000/" })

public class DoctorController {
	@GetMapping
	public <T> ResponseEntity<T> getDocotors() {
		System.out.println("Doctor Controller getDoctors() called");
		return new ResponseEntity<T>(HttpStatus.OK);
	}
	
	@PostMapping
	public <T> ResponseEntity<T> addDocotors() {
		System.out.println("Doctor Controller addDoctor() called");
		return new ResponseEntity<T>(HttpStatus.OK);
	}
	
	@DeleteMapping
	public <T> ResponseEntity<T> deleteDocotor() {
		System.out.println("Doctor Controller deleteDoctor() called");
		return new ResponseEntity<T>(HttpStatus.OK);
	}
	
	@PutMapping
	public <T> ResponseEntity<T> updateDocotor() {
		System.out.println("Doctor Controller updateDoctor() called");
		return new ResponseEntity<T>(HttpStatus.OK);
	}

}
