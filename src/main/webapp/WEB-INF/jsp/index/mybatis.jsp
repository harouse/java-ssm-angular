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
                <ul>
                    <li>MyBatis 是一款持久层框架，它支持定制化 SQL、存储过程以及高级映射。</li>
                    <li>MyBatis 避免了几乎所有的 JDBC 代码和手动设置参数以及获取结果集。</li>
                    <li>MyBatis 可以使用简单的 XML 或注解来配置和映射原生信息，将接口和 Java 的 entity映射成数据库中的记录</li>
                    <li>MyBatis 相当于Laravel 框架的 ORM 层，但是用起来的体验差很多很多😓</li>
                </ul>

                <h4>和 Laravey Eloquent ORM 对比</h4>
                <div>
                    <span>在业务逻辑中我们都是操作对象</span>
                    <ul>
                        <li>laravey 直接操作数据对象，对其进行增删改查</li>
                        <li>mybatis 抛开最后于数据库的交互不谈，使用过程中也是直接操作实体对象</li>
                    </ul>

                    <span>区别如下</span>
                    <ul>
                        <li>laravel 模型由于语言优势，各种字段我们不需要关系，遇到需要的模型属性直接赋值即可</li>
                        <li>mybatis 需要定义各种操作数据库的语句，和实体，业务层用起来很爽，但是数据库写起来很苦逼（看一个例子）</li>
                    </ul>
                </div>

                <p> 当然很多人发现了各种字段的赋值，查询写的人烦不胜烦，但是鉴于语言本身又不能不写，我们可以通过工具自动实现这些功能 </p>

                <br/>
                <h4> mybatis-geneator是一款mybatis自动代码生成工具，可以通过配置，快速生成mapper和xml文件</h4>

                <p>
                    <a href="https://github.com/mybatis/generator/releases">mybatis generator 下载地址</a>
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
                <h4>
                    使用过程中问题总结
                </h4>

                <div>
                    <p>1 : 返回插入数据后的自增ID</p>
                    <p>
                        mapper 文件 insert 添加 useGeneratedKeys="true" keyProperty= "id"
                        insert 传入的一定要是一个对象，要让id 有地方绑定，这里看真实示例
                    </p>
                </div>
            </div>
        </div>

        <%@include file="../common/footer.jsp"%>
    </div>
</div>
</body>
</html>
