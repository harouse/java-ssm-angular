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
            <h2>Spring MVC 介绍</h2>
        </div>

        <div class="panel-body">
            <p>
                Spring MVC 是一个模型 - 视图 - 控制器（MVC）的Web框架建立在中央前端控制器servlet（DispatcherServlet）<br>
                它负责发送每个请求到合适的处理程序，使用视图来最终返回响应结果的概念。<br>
                Spring MVC 是 Spring 产品组合的一部分，它享有 Spring IoC容器紧密结合Spring松耦合等特点，因此它有Spring的所有优点
            </p>

            <p>
                Srping MVC 会对应的功能指定到具体的功能函数中，比如我们要访问 /index 这个地址 对应的功能法法为 IndexController/index
                需要注意的是，SSM框架路由没有独立出来，所有的路由写在控制器中 （我们就看index这个例子😝）
            </p>
        </div>

        <%@include file="../common/footer.jsp"%>
    </div>
</div>
</body>
</html>
