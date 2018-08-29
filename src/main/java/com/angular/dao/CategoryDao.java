package com.angular.dao;

import com.angular.entity.Category;

import java.util.Map;

public interface CategoryDao {
    /**
     * 添加分类
     * @param addCategoryParam
     * @return
     */
    Category addCategory(Map<String, Object> addCategoryParam);

}
