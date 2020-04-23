package com.example.demo.dao;

import java.util.List;

import com.example.demo.model.User;

 

public interface AdminDao {
	public List queryEmpAll();

	public User findByUserName(String username);

	void insertAllStudent(List<User> list) throws RuntimeException;  

}
