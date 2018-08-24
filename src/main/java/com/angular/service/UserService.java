package com.angular.service;

import java.util.List;

import com.angular.entity.User;

public interface UserService {

	List<User> getUserList(int offset, int limit);
	 
}
