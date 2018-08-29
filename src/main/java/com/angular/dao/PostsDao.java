package com.angular.dao;

import com.angular.entity.Posts;

import java.util.Map;

public interface PostsDao {

    /**
     * 添加帖子
     * @param addPostsParam
     * @return
     */
    Posts addPosts(Map<String, Object> addPostsParam);

    /**
     * 修改帖子
     * @param changePostsParam
     * @return
     */
    Posts changePosts(Map<String, Object> changePostsParam);

}
