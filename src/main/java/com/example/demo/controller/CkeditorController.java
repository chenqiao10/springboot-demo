package com.example.demo.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.alibaba.fastjson.JSONObject;

import cn.hutool.core.lang.UUID;

@Controller
public class CkeditorController {
	@RequestMapping("/edit")
	public String edit() {

		return "ckeditor";
	}

	@RequestMapping("/uploadImage")
	@ResponseBody
	public String uploadImage(@RequestParam(value = "file", required = true) MultipartFile file) {
				/* 获取项目路径 */
		String property = System.getProperty("user.dir");
		File file3 = new File(property);
		String filePath = file3.getParent() + File.separator + "upload";
		// 自定义的文件名称
		String trueFileName = UUID.randomUUID().toString();
		// 文件原名称
		String fileName = file.getOriginalFilename();
		// 文件类型
		String type = fileName.indexOf(".") != -1 ? fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length())
				: null;
		// 设置存放图片文件的路径
		String path = null == type ? filePath + File.separator + trueFileName
				: filePath + File.separator + trueFileName + "." + type;
		File file2 = new File(filePath);
		if (!file2.exists()) {
			file2.mkdirs();
		}
		// 转存文件到指定的路径
		try {
			file.transferTo(new File(path));
			Map<String, Object> resultMap = new HashMap<>();
			resultMap.put("path", null == type ? trueFileName : trueFileName + "." + type);
			System.out.println(resultMap);
		} catch (IllegalStateException | IOException e) {
			e.printStackTrace();
		}
JSONObject json=new JSONObject();
json.put("url", "http://172.16.1.18:8081/demo/image/"+trueFileName+"."+type);
		return json.toJSONString();
	}

	@RequestMapping(value = { "/file/download" }, method = RequestMethod.GET)
	public ResponseEntity<byte[]> download(@RequestParam("filename") String fileName) throws IOException {
		String property = System.getProperty("user.dir");
		File file3 = new File(property);
		String filePath = file3.getParent() + File.separator + "upload" + File.separator + fileName;
		@SuppressWarnings("resource")
		InputStream in = new FileInputStream(new File(filePath));// 将该文件加入到输入流之中
		byte[] body = null;
		body = new byte[in.available()];// 返回下一次对此输入流调用的方法可以不受阻塞地从此输入流读取（或跳过）的估计剩余字节数
		in.read(body);// 读入到输入流里面

		fileName = new String(fileName.getBytes("gbk"), "iso8859-1");// 防止中文乱码
		HttpHeaders headers = new HttpHeaders();// 设置响应头
		headers.add("Content-Disposition", "attachment;filename=" + fileName);
		HttpStatus statusCode = HttpStatus.OK;// 设置响应吗
		ResponseEntity<byte[]> response = new ResponseEntity<byte[]>(body, headers, statusCode);
		return response;
	}

}
