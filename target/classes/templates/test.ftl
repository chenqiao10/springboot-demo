<#assign security=JspTaglibs["http://www.springframework.org/security/tags"] />
<#assign base=request.contextPath /> 
<!DOCTYPE html>
<html>
<body>
  <div class="starter-template">
     
			<h2>8077 <#if user??>  
  ${error}
</#if>  </h2>
			<form name="form"   action="j_spring_security_check" method="POST"> <!-- 3 -->
				<div class="form-group">
					<label for="username">用户</label>
					<input type="text" class="form-control" name="j_username" value="" placeholder="用户" />
				</div>
				<div class="form-group">
					<label for="password">密码</label>
					<input type="password" class="form-control" name="j_password" placeholder="密码" />
				</div>
				<input type="submit" id="login" value="Login" class="btn btn-primary" />
			</form>
      </div>
</body>
</html>