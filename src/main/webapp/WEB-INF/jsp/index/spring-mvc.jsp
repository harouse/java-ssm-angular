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

            <p>
                SpringMVC常用注解
            </p>

            <pre>
    @Controller

    　　负责注册一个bean 到spring 上下文中
    @RequestMapping

    　　注解为控制器指定可以处理哪些 URL 请求
    @RequestBody

    　　该注解用于读取Request请求的body部分数据，使用系统默认配置的HttpMessageConverter进行解析

    @ResponseBody

    　　 该注解用于将Controller的方法返回的对象，通过适当的HttpMessageConverter转换为指定格式后，写入到Response对象的body数据区

    @ModelAttribute 　　　

    　　在方法定义上使用 @ModelAttribute 注解：Spring MVC 在调用目标处理方法前，会先逐个调用在方法级上标注了@ModelAttribute 的方法

    　　在方法的入参前使用 @ModelAttribute 注解：可以从隐含对象中获取隐含的模型数据中获取对象，再将请求参数 –绑定到对象中，再传入入参将方法入参对象添加到模型中

    @RequestParam　

    　　在处理方法入参处使用 @RequestParam 可以把请求参 数传递给请求方法

    @PathVariable

    　　绑定 URL 占位符到入参
    @ExceptionHandler

    　　注解到方法上，出现异常时会执行该方法
    @ControllerAdvice

    　　使一个Contoller成为全局的异常处理类，类中用@ExceptionHandler方法注解的方法可以处理所有Controller发生的异常
            </pre>

        </div>

        <%@include file="../common/footer.jsp"%>
    </div>
</div>
</body>
</html>
