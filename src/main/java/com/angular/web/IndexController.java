package com.angular.web;

import com.angular.dto.BaseResult;
import com.angular.entity.Goods;
import com.angular.enums.ResultEnum;
import com.angular.exception.BizException;
import com.angular.service.GoodsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/index")
public class IndexController {
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

}
