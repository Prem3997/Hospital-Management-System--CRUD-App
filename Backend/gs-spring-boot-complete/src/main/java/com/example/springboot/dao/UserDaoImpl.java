package com.example.springboot.dao;

import org.springframework.stereotype.Repository;

@Repository
public class UserDaoImpl implements UserDao {

	@Override
	public boolean isValidUser(String username, String password) {
		// TODO Auto-generated method stub
		System.out.println("User Dao Implementaion Called");
		if(username.equals("admin@imail2.org") && password.equals("admin")){
			return true;
		}
		return false;
	}

}
