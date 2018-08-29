package com.angular.dao;


import java.util.HashMap;
import java.util.List;
import java.util.Map;


import com.angular.service.ToolsServices;
import com.angular.service.impl.UserServiceImpl;
import com.angular.web.CommonController;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.angular.entity.User;

/**
 * 
 * @author NelsonKing
 *
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring/spring-dao.xml")
public class UserDaoTest {

    @Autowired
    private UserDao userDao;

	@Test
	public void testQueryAddUser()
	{
		User userObj = new User();;
		userObj.setName("NelsonKing");
		userObj.setEmail("gaoyansing@sina.com");
		userObj.setPassword(ToolsServices.parseMd5("gaoyansing"));
		userObj.setIsAdmin(1);

		userDao.addUser(userObj);

		System.out.println(userObj.getId());
		System.out.println("--------------------------");
	}

	@Test
	public void testQueryUser()
	{
		String name = "NelsonKing";
		String password = ToolsServices.parseMd5("gaoyansing1");
		User user = userDao.queryUser(name, password);

		System.out.println(user);
		System.out.println("--------------------------");
	}

	@Test
	public void testQueryAll() {
		List<User> list=userDao.queryAll(0, 100);
		for (User user : list) {
			System.out.println(user);
		}
	}
}
