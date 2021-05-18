package com.example.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springboot.dao.UserDao;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserDao userDao;

	@Override
	public boolean isValidUser(String username, String password) {
		// TODO Auto-generated method stub
		System.out.println("User Service Called");
		
		return userDao.isValidUser(username, password);
	}

}
