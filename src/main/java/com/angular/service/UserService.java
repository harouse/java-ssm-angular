package com.angular.service;

import java.util.List;
import java.util.Map;

import com.alibaba.fastjson.JSONObject;
import com.angular.entity.User;

public interface UserService {
	JSONObject login(String name, String password);

	User queryUserById(Integer id);

	JSONObject addUser(String name, String password, String email, int is_admin);

	void editUser(User user);
}
