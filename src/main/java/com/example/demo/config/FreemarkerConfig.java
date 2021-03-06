package com.example.demo.config;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import freemarker.ext.jsp.TaglibFactory;

@Configuration
public class FreemarkerConfig {
	
    @Autowired  
    protected freemarker.template.Configuration configuration;  
    @Autowired  
    protected org.springframework.web.servlet.view.freemarker.FreeMarkerViewResolver resolver;  
    @Autowired  
    protected org.springframework.web.servlet.view.InternalResourceViewResolver springResolver;  
    
    @PostConstruct  
    public void  setSharedVariable(){  
        resolver.setSuffix(".ftl");   
        resolver.setCache(false); 
        resolver.setRequestContextAttribute("request"); //为模板调用时，调用request对象的变量名</span>  
        resolver.setOrder(0);  
        resolver.setExposeRequestAttributes(true);
        resolver.setExposeSessionAttributes(true);
    }  

     
 

}
