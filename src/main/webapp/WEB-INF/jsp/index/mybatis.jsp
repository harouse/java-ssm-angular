<%--
  Created by IntelliJ IDEA.
  User: nelsonking
  Date: 2018/8/24
  Time: 16:30
  To change this template use File | Settings | File Templates.
--%>
<%@include file="../common/tag.jsp" %>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>SSM 项目</title>
    <%@include file="../common/head.jsp" %>
</head>
<body>
<div class="container">
    <div class="panel panel-default">
        <div class="panel-heading text-center">
            <h2>介绍Mybatis</h2>
        </div>
        <div class="panel-body">
            <div>
                <h3>使用 mybatis-generator 生成 dao,mapping和entity</h3>

                <p>
                    <a href="https://github.com/mybatis/generator/releases">mybatis 下载地址</a>
                    <p>使用说明文档在 docs 目录下</p>
                </p>

                <div>
                    <span>配置generatorConfig.xml 文件</span>
                    <ul>
                        <li>配置数据库</li>
                        <li>配置数据表</li>
                        <li>具体看真实示例</li>
                    </ul>
                </div>

                <div>
                    <p>执行</p>
                    <p>java -jar mybatis-generator-core-x.x.x.jar -configfile generatorConfig.xml</p>
                </div>
            </div>


            <div>
                <h3>
                    使用过程中问题总结
                </h3>

                <div>
                    <p>1 : 返回插入数据后的自增ID</p>
                    <p>
                        mapper 文件 insert 添加 useGeneratedKeys="true" keyProperty= "id"
                        insert 传入的一定要是一个对象，要让id 有地方绑定，这里看真实示例
                    </p>
                </div>


            </div>
        </div>
    </div>
</div>
</body>
</html>
