package com.angular.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.angular.entity.Posts;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.angular.entity.User;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring/spring-dao.xml")
public class PostsDaoTest {
    @Autowired
    private PostsDao postsDao;

    @Test
    public void testAddPosts()
    {
        Posts posts = new Posts();
        posts.setTitle("title");
        posts.setContents("content");
        posts.setUserId(1);

        postsDao.addPosts(posts);

        System.out.println(posts.getId());
    }

    @Test
    public void testFindById()
    {
        Posts posts = postsDao.findById(1);
        System.out.println(posts.getContents());
    }

    @Test
    public void testDelete()
    {
        postsDao.delete(1);
    }

}
