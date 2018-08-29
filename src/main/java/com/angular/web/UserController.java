package com.angular.web;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.angular.entity.User;
import com.angular.exception.BizException;
import com.angular.service.ToolsServices;
import com.angular.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.apache.ibatis.annotations.Param;
import sun.security.provider.MD5;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/user")
public class UserController extends CommonController {
	
	@Autowired
	private UserService userService;

	/**
	 * 前后登录
	 * @param name
	 * @param password
	 * @return
	 */
	@RequestMapping(value = "/login")
	@ResponseBody
	public JSONObject login(@Param("name") String name, @Param("password") String password)
	{
		JSONObject userJson;

		try {
			userJson = userService.login(name, password);
		} catch (Exception e) {
			return jsonError(e.getMessage());
		}

		return jsonSuccess(userJson);
	}


	@RequestMapping(value = "/add-user")
	@ResponseBody
	public JSONObject addUser(@Param("name") String name, @Param("email") String email,
							  @Param("password") String password,
							  @RequestParam(value = "is_admin", required = false) Integer is_admin) {
		JSONObject userJson;

		try {
			password = ToolsServices.parseMd5(password);
			is_admin = is_admin == null || is_admin == 0 ? 0 : 1;

			userJson = userService.addUser(name, password, email, is_admin);
		} catch (Exception e) {
			return jsonError(e.getMessage());
		}

		return jsonSuccess(userJson);
	}

}
