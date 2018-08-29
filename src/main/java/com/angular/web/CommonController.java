package com.angular.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.alibaba.fastjson.JSONObject;

public class CommonController {
    private final Logger LOG = LoggerFactory.getLogger(this.getClass());

    public JSONObject jsonSuccess(Object obj)
    {
        JSONObject jsonResult = new JSONObject();
        jsonResult.put("code", 200);
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
