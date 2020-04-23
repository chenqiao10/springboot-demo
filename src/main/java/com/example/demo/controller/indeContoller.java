package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
@Controller
@RequestMapping("/index")
public class indeContoller {
	
	 
	   @RequestMapping("/show")
	    public String show(){
	       String msg="12312";
	       System.out.println(msg);
	        return "home";
	    }
	   @RequestMapping("/login")
		public String login(){
			
			return "login";
		}
	  
}
