<%--
  Created by IntelliJ IDEA.
  User: nelsonking
  Date: 2018/8/24
  Time: 16:30
  To change this template use File | Settings | File Templates.
--%>
<%@include file="../common/tag.jsp"%>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>SSM 项目</title>
    <%@include file="../common/head.jsp"%>
</head>
<body>
<div class="container">
    <div class="panel panel-default">
        <div class="panel-heading text-center">
            <h2>SSM 框架搭建完毕的目录结构展示</h2>
        </div>

        <div class="panel-body">
            <table class="table table-bordered .table-hover">
                <tr class="info">
                    <td>目录名</td>
                    <td>作用</td>
                </tr>
                <tr>
                    <td>src</td>
                    <td>根目录，没什么好说的，下面有main和test。</td>
                </tr>
                <tr>
                    <td>src/main</td>
                    <td>主要目录，可以放java代码和一些资源文件。</td>
                </tr>
                <tr>
                    <td>src/main/java</td>
                    <td>存放java代码</td>
                </tr>
                <tr>
                    <td>src/main/java/dao 数据访问层（接口)</td>
                    <td>与数据打交道，可以是数据库操作，也可以是文件读写操作，甚至是redis缓存操作</td>
                </tr>
                <tr>
                    <td>src/main/java/entity 实体类</td>
                    <td>一般与数据库的表相对应，封装dao层取出来的数据为一个对象。</td>
                </tr>
                <tr>
                    <td>src/main/java/dto 数据传输层</td>
                    <td>用于service层与web层之间传输</td>
                </tr>
                <tr>
                    <td>src/main/java/service 逻辑（接口）</td>
                    <td>写我们的业务逻辑</td>
                </tr>
                <tr>
                    <td>src/main/java/service/impl 业务逻辑（实现)</td>
                    <td>实现我们业务接口</td>
                </tr>
                <tr>
                    <td>web 控制器</td>
                    <td>springmvc 就是在这里发挥作用的，也就是controller控制器</td>
                </tr>
                <tr>
                    <td>src/main/resources</td>
                    <td>存放资源文件，各种的spring，mybatis，log配置文件。</td>
                </tr>
                <tr>
                    <td>src/main/resources/mapper</td>
                    <td>存放dao中每个方法对应的sql，在这里配置，无需写daoImpl。</td>
                </tr>
                <tr>
                    <td>src/main/resources/spring</td>
                    <td>这里当然是存放spring相关的配置文件，有dao service web三层。</td>
                </tr>
                <tr>
                    <td>src/main/webapp</td>
                    <td>用来存放我们前端的静态资源，如jsp js css。</td>
                </tr>
                <tr>
                    <td>src/main/webapp/resources</td>
                    <td>项目的静态资源，如js css images等。</td>
                </tr>
                <tr>
                    <td>src/main/webapp/WEB-INF</td>
                    <td>很重要的一个目录，外部浏览器无法访问，只有羡慕内部才能访问，可以把jsp放在这里，另外就是web.xml了</td>
                </tr>
                <tr>
                    <td>test</td>
                    <td>这里是测试分支。</td>
                </tr>
                <tr>
                    <td>test/java</td>
                    <td>测试java代码，应遵循包名相同的原则</td>
                </tr>
            </table>
        </div>

        <%@include file="../common/footer.jsp"%>
    </div>
</div>
</body>
</html>
