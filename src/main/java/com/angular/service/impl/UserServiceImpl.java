package com.angular.service.impl;

import com.angular.dao.UserDao;
import com.angular.entity.User;
import com.angular.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

	private final Logger LOG = LoggerFactory.getLogger(this.getClass());
	@Autowired
	private UserDao userDao;
	
	
	@Override
	public List<User> getUserList(int offset, int limit) {
		//缓存中没有再去数据库取，并插入缓存（缓存时间为60秒）
		List<User> result_cache=userDao.queryAll(offset, limit);

		return result_cache;
	}
	
	

}
