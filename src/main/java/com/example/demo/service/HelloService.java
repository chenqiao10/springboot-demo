package com.example.demo.service;

import org.springframework.stereotype.Service;

@Service
public class HelloService implements  HelloServiceImpl{

	@Override
	public String sayHello() {
		// TODO Auto-generated method stub
		return "hello";
	}

}
