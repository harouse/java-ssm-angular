package com.angular.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.angular.dao.CategoryDao;
import com.angular.entity.User;
import com.angular.exception.BizException;
import com.angular.service.CategoryService;
import com.angular.service.ToolsServices;
import com.angular.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Map;

@Service
public class CategoryServiceImpl implements CategoryService {

    private final Logger LOG = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private CategoryDao categoryDao;
}
