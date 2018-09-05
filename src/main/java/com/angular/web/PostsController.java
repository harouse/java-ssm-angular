package com.angular.web;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.angular.JWT;
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
import org.springframework.web.bind.annotation.*;
import org.apache.ibatis.annotations.Param;
import sun.security.provider.MD5;
import javax.servlet.http.HttpServletRequest;
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
     * 添加帖子
     * @return
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public JSONObject add(@RequestBody Posts posts)
    {
        try {
            User userObj = checkUser();
            posts.setUserId(userObj.getId());

            postsService.add(posts);
        } catch (Exception e) {
            e.printStackTrace();
            return jsonError(e.getMessage());
        }

        return jsonSuccess("");
    }

    /**
     * 修改帖子
     */
    @RequestMapping(value = "/edit")
    @ResponseBody
    public JSONObject edit( @RequestBody Posts posts)
    {
        try {
            User userObj = checkUser();
            Posts postsObj = postsService.findById(posts.getId());
            postsObj.setModifyUser(userObj.getId());

            if (!posts.getTitle().isEmpty()) {
                postsObj.setTitle(posts.getTitle());
            }

            if (!posts.getContents().isEmpty()) {
                postsObj.setContents(posts.getContents());
            }

            postsService.edit(postsObj);
        } catch (Exception e) {
            return jsonError(e.getMessage());
        }

        return jsonSuccess("");
    }


    /**
     * 删除帖子
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public JSONObject delete( @RequestBody Posts posts)
    {
        try {
            Posts postsObj = postsService.findById(posts.getId());
            checkParam(postsObj);

            postsService.delete(posts.getId());
        } catch (Exception e) {
            return jsonError(e.getMessage());
        }

        return jsonSuccess("");
    }

}