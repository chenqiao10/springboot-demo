<#assign security=JspTaglibs["http://www.springframework.org/security/tags"] />
<#assign base=request.contextPath /> 
<!DOCTYPE html>
<html>
<body>
  <div class="starter-template">
     
			<h2>浣跨敤璐﹀彿瀵嗙爜鐧诲綍8077<#if user??>  
  ${user}  
</#if>  </h2>
			<form name="form"   action="/j_spring_security_check" method="POST"> <!-- 3 -->
				<div class="form-group">
					<label for="username">璐﹀彿</label>
					<input type="text" class="form-control" name="j_username" value="" placeholder="璐﹀彿" />
				</div>
				<div class="form-group">
					<label for="password">瀵嗙爜</label>
					<input type="password" class="form-control" name="j_password" placeholder="瀵嗙爜" />
				</div>
				<input type="submit" id="login" value="Login" class="btn btn-primary" />
			</form>
      </div>
</body>
</html>