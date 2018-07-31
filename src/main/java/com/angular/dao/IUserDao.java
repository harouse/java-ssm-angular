package com.angular.dao;

import com.angular.model.User;

public interface IUserDao {

    User selectUser(long id);

}