package com.example.demo.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.model.User;
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
	   @RequestMapping("/connect")
	   @ResponseBody
		public ResponseEntity<User> connect(HttpServletResponse resp) throws InterruptedException{
		   resp.addHeader("Connection", "keep-alive");
		   resp.addHeader("keep-alive","timeout=7000,max=8000");
		   resp.addHeader("content-type", "text/html");
		   resp.setContentType("text/html; charset=UTF-8"); 
		   Thread.sleep(1000);
		  User u=new User();
		  u.setUsername("chenqiao");
		   return new ResponseEntity<>(u,HttpStatus.OK);
		}
	  
}
