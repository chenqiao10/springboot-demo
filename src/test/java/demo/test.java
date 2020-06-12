package demo;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import cn.hutool.core.convert.Convert;

public class test
{
	public static void main(String[] args)
	{
		 String pass= new BCryptPasswordEncoder().encode("11"); System.out.println(pass);
		/*
		 * String pass= new BCryptPasswordEncoder().encode("11"); System.out.println(pass);
		 */
		/*
		 * Integer i=-100; System.out.println(i);
		 */
/*
		List<User> ss = new ArrayList<>();
		User u = new User();
		u.setId(1);
		u.setUsername("2");
		User u1 = new User();
		u1.setId(1);
		u1.setUsername("3");
		ss.add(u);
		ss.add(u1);
		ss.forEach(x -> System.out.println(x));
		for (int i = 0; i < ss.size(); i++)
		{
			User user = ss.get(i);
			user.setPassword("1");
		}
		ss.forEach(x -> System.out.println(x));
		Map<Integer, List<String>> map = ss.stream().collect(Collectors.groupingBy(User::getId, Collectors.mapping(User::getUsername, Collectors.toList())));
		System.out.println(map);*/
	/*	Map <String,String>map = new HashMap<String,String>();
		map.put("熊大", "棕色");
		map.put("熊二", "黄色");
		for(Map.Entry<String, String> entry : map.entrySet()){
		    String mapKey = entry.getKey();
		    String mapValue = entry.getValue();
		    entry.setValue("12");
		    System.out.println(mapKey+":"+mapValue);
		}
		for(Map.Entry<String, String> entry : map.entrySet()){
			 String mapKey = entry.getKey();
			    String mapValue = entry.getValue();
			    System.out.println(mapKey+":"+mapValue);
		}*/
		String s="A";
		s=s.toUpperCase();
		char charAt = s.charAt(0);
		System.out.println(Convert.toInt(s));
		Convert.toInt(s);
		System.out.println(charAt-64);
	}
}
