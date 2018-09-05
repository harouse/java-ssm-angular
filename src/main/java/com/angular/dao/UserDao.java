package com.angular.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.angular.entity.User;

public interface UserDao {
    /**
     * 添加用户
     * @param user
     * @return
     */
    void addUser(User user);

    /**
     * 查看用户名是否存在
     * @param name
     * @return
     */
    List<User> queryUserByName(String name);

    /**
     * 查看邮箱是否存在
     * @param email
     * @return
     */
    List<User> queryUserByEmail(String email);

    User queryUserById(Integer id);

    /**
     * 查找用户
     * @param name
     * @param password
     * @return
     */
    User queryUser(@Param("name") String name, @Param("password") String password);
    
    
    /**
     * 根据偏移量查询用户列表
     *
     * @param offset
     * @param limit
     * @return
     */
    List<User> queryAll(@Param("offset") int offset, @Param("limit") int limit);

    /**
     * 修改用户信息
     * @param user
     */
    void editUser(User user);
}
