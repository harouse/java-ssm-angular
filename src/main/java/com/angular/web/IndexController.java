package com.angular.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/index")
public class IndexController {
    /**
     * 项目首页
     * @param model
     * @return
     */
    @RequestMapping(value = "", method = RequestMethod.GET)
    public String index(Model model)
    {
        String paramStr = "字符串变量";

        Map<String,Object> paramMap=new HashMap<>();
        paramMap.put("name", "NelsonKing");
        paramMap.put("sex", "Male");
        paramMap.put("age", 18);


        String[] paramArray = new String[3];
        paramArray[0] = "数组变量1";
        paramArray[1] = "数组变量2";
        paramArray[2] = "数组变量3";

        model.addAttribute("paramStr", paramStr);
        model.addAttribute("paramArray", paramArray);
        model.addAttribute("paramMap", paramMap);

        return "index/index";
    }

    /**
     * batis 介绍
     * @param model
     * @return
     */
    @RequestMapping(value = "mybatis")
    public String mybatis(Model model)
    {

        return "index/mybatis";
    }

}
