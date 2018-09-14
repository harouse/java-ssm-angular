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
        String paramStr = "abcdefg";

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
     * 目录 介绍
     * @param model
     * @return
     */
    @RequestMapping(value = "dictionary")
    public String dictionary(Model model)
    {
        return "index/dictionary";
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

    /**
     * spring 介绍
     */
    @RequestMapping(value = "spring")
    public String spring(Model model)
    {

        return "index/spring";
    }

    /**
     * spring mvc 介绍
     */
    @RequestMapping(value = "spring-mcv")
    public String springMvc(Model model)
    {

        return "index/spring-mvc";
    }

}
