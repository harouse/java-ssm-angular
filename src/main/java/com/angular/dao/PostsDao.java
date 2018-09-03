package com.angular.dao;

import com.angular.entity.Posts;

import java.util.List;
import java.util.Map;

public interface PostsDao {

    /**
     * 添加帖子
     * @param posts
     * @return
     */
    void addPosts(Posts posts);

    /**
     * 修改帖子
     * @param posts
     * @return
     */
    Posts editPosts(Posts posts);

    /**
     * 通过ID查找文章
     * @param id
     * @return
     */
    Posts findById(int id);


    /**
     * 删除帖子
     * @return
     */
    void delete(int id);


    List<Posts> lists();
}
