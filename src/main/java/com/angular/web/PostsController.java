package com.angular.web;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.angular.entity.Posts;
import com.angular.entity.User;
import com.angular.exception.BizException;
import com.angular.service.ToolsServices;
import com.angular.service.PostsService;
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
@RequestMapping("/posts")
public class PostsController extends CommonController {

    @Autowired
    private PostsService postsService;

    /**
     * 获取帖子列表
     * @return
     */
    @RequestMapping(value = "/lists")
    @ResponseBody
    public JSONObject lists()
    {
        List<Posts> listPosts;

        try {
            listPosts = postsService.lists();
        } catch (Exception e) {
            return jsonError(e.getMessage());
        }

        return jsonSuccess(listPosts);
    }

    /**
     * 修改帖子
     */
    public JSONObject edit( @Param("id") int id,
                            @RequestParam(value = "title", required = false) String title,
                            @RequestParam(value = "contents", required = false) String contents)
    {
        try {
            Posts posts = postsService.findById(id);

            if (!title.isEmpty()) {
                posts.setTitle(title);
            }

            if (!contents.isEmpty()) {
                posts.setContents(contents);
            }

            postsService.edit(posts);
        } catch (Exception e) {
            return jsonError(e.getMessage());
        }

        return jsonSuccess("");
    }


    /**
     * 删除帖子
     */
    public JSONObject delete(@Param("id") int id)
    {

        try {
            postsService.delete(id);

        } catch (Exception e) {
            return jsonError(e.getMessage());
        }

        return jsonSuccess("");
    }


}