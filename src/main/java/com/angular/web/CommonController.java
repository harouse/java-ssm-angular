package com.angular.web;

import com.angular.JWT;
import com.angular.entity.Posts;
import com.angular.entity.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.context.request.ServletWebRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class CommonController {
    private final Logger LOG = LoggerFactory.getLogger(this.getClass());

    public static HttpServletRequest getRequest(){
        HttpServletRequest req = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        return req;
    }
    public static HttpServletResponse getResponse() {
        HttpServletResponse resp = ((ServletWebRequest) RequestContextHolder.getRequestAttributes()).getResponse();
        return resp;
    }

    public User checkUser() throws Exception
    {
        try {
            String token = getRequest().getHeader("authorization");
            System.out.println(token);

            User userObj =  JWT.unsign(token, User.class);
            System.out.println(userObj.toString());

            return userObj;

        } catch (Exception e) {
            e.printStackTrace();
            throw new Exception("登录失效，请重新登录");
        }
    }

    public boolean paramInvalid(Object object)
    {
        String param = object.toString();

        if (param == null) {
            return false;
        }

        if (param.isEmpty()) {
            return false;
        }

        return true;
    }

    public void checkPermission(Posts postsObj) throws Exception
    {
        User userObj = checkUser();

        if (userObj.getId() != postsObj.getId() && userObj.getIsAdmin() != 1) {
            throw new Exception("无权限操作");
        }
    }

    public JSONObject jsonSuccess(Object obj)
    {
        JSONObject jsonResult = new JSONObject();
        jsonResult.put("code", 200);
        jsonResult.put("msg", "success");
        jsonResult.put("data", obj);

        return jsonResult;
    }

    public JSONObject jsonError(String msg)
    {
        JSONObject jsonResult = new JSONObject();
        jsonResult.put("code", 400);
        jsonResult.put("msg", msg);
        jsonResult.put("data", new String[0]);

        return jsonResult;
    }

    public void checkParam(Object obj) throws Exception
    {
        if (obj == null) throw new Exception(obj.toString() + "不能为空");
    }

    public void log(Exception e)
    {
        e.printStackTrace();
    }

    public void log(Object message) {
        LOG.info(message.toString());
    }
}
