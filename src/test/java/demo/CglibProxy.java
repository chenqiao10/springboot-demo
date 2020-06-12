package demo;

import java.lang.reflect.Method;

import org.springframework.cglib.proxy.Enhancer;
import org.springframework.cglib.proxy.MethodInterceptor;
import org.springframework.cglib.proxy.MethodProxy;

import com.example.demo.model.User;

public class CglibProxy implements MethodInterceptor {
	private Object target;

	public CglibProxy(Object target) {
		this.target = target;
	}

	/**
	 * 创建代理对象
	 * 
	 * @return
	 */
	public Object getProxyInstance() {
		Enhancer enhancer = new Enhancer();
		// 设置父类
		enhancer.setSuperclass(target.getClass());
		// 设置回调函数
		enhancer.setCallback(this);
		// 创建子类（代理对象）
		return enhancer.create();
	}

	@Override
	public Object intercept(Object arg0, Method method, Object[] args, MethodProxy arg3) throws Throwable {
		if (method.getName().contains("set")) {// 这里只改造被代理对象的save方法
			System.out.println("开始事务");
			// 执行被代理对象的方法
			Object invoke = method.invoke(target, args);
			System.out.println("提交事务");
			return invoke;
		} else {// 其余方法按原样执行
			return method.invoke(target, args);
		}
	}

	public static void main(String[] args) {
		// 被代理对象
		User user = new User();
		// class cn.chao.cglibProxy.UserDao
		System.out.println(user.getClass());
		// 代理对象
		User proxy = (User) new CglibProxy(user).getProxyInstance();
		// UserDao的子类 class cn.chao.cglibProxy.UserDao$$EnhancerByCGLIB$$e6c21b2c
		System.out.println(proxy.getClass());
		// 执行代理对象的方法
		proxy.setUsername("chenqiao");;
	}

}
