package com.angular.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.angular.dao.PostsDao;
import com.angular.entity.Posts;
import com.angular.entity.User;
import com.angular.exception.BizException;
import com.angular.service.PostsService;
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
public class PostServiceImpl implements PostsService {

    private final Logger LOG = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private PostsDao postsDao;

    @Override
    public List<Posts> lists()
    {
        List<Posts> listPosts = postsDao.lists();

        return listPosts;
    }

    @Override
    public void edit(Posts posts)
    {
        postsDao.editPosts(posts);
    }

    @Override
    public Posts findById(int id)
    {
        Posts posts = postsDao.findById(id);

        return posts;
    }

    @Override
    public void delete(int id)
    {
        postsDao.delete(id);
    }
}
