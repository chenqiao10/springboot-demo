package com.example.demo.config.springmvc;

import java.io.File;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
* 图片绝对地址与虚拟地址映射
*/

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

	
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {

		// 文件磁盘图片url 映射
		// 配置server虚拟路径，handler为前台访问的目录，locations为files相对应的本地路径
		String property = System.getProperty("user.dir");
		File file3 = new File(property);
		String filePath = file3.getParent()+File.separator+"upload"+File.separator;
		System.out.println(filePath);
		registry.addResourceHandler("/image/**").addResourceLocations("file:"+filePath);
	}

}
