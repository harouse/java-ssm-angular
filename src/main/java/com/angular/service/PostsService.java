package com.angular.service;

import java.util.List;
import java.util.Map;

import com.alibaba.fastjson.JSONObject;
import com.angular.entity.Posts;
import com.angular.entity.User;

public interface PostsService {
    public Posts findById(int id);
    public List<Posts>  lists();
    public void edit(Posts posts);
    public void delete(int id);
}
