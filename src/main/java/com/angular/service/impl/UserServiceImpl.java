package com.angular.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.angular.dao.UserDao;
import com.angular.entity.User;
import com.angular.exception.BizException;
import com.angular.service.ToolsServices;
import com.angular.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService {

    private final Logger LOG = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private UserDao userDao;


    @Override
    public JSONObject login(String name, String password) {
        password = ToolsServices.parseMd5(password);
        User userObj = userDao.queryUser(name, password);
        if (userObj == null) throw new BizException("用户名或密码错误");

        JSONObject resultJson = new JSONObject();
        resultJson.put("id", userObj.getId());
        resultJson.put("name", userObj.getName());
        resultJson.put("email", userObj.getEmail());
        resultJson.put("is_admin", userObj.getIsAdmin());

        return resultJson;
    }

    @Override
    public JSONObject addUser(String name, String password, String email, int is_admin)
    {
        // 查看用户是否存在
        List<User> nameObj = userDao.queryUserByName(name);
        if (nameObj != null) throw new BizException("当前用户名已经存在");

        List<User> emailObj = userDao.queryUserByEmail(email);
        if (emailObj != null) throw new BizException("当前邮箱已经存在");

        // 设置插入对象，便于查看自增ID
        JSONObject resultJson = new JSONObject();
        User userObj = new User();
        userObj.setName(name);
        userObj.setPassword(password);
        userObj.setEmail(email);
        userObj.setIsAdmin(is_admin);
        userDao.addUser(userObj);

        resultJson.put("id", userObj.getId());
        resultJson.put("name", name);
        resultJson.put("email", email);
        resultJson.put("is_admin", is_admin);

        return resultJson;
    }

    @Override
    public User queryUserById(Integer id) {
        return userDao.queryUserById(id);
    }

    @Override
    public void editUser(User user) {
        userDao.editUser(user);
    }
}

