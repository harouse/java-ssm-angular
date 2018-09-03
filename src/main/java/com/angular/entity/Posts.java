package com.angular.entity;

import java.util.Date;

/**
 * 帖子
 * @author  NelsonKing
 */
public class Posts {
    private Integer id;

    private String title;

    private Integer userId;

    private Integer modifyUser;

    private Date createdAt;

    private String contents;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title == null ? null : title.trim();
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getModifyUser() {
        return modifyUser;
    }

    public void setModifyUser(Integer modifyUser) {
        this.modifyUser = modifyUser;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCaeatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public String getContents() {
        return contents;
    }

    public void setContents(String contents) {
        this.contents = contents == null ? null : contents.trim();
    }
}
