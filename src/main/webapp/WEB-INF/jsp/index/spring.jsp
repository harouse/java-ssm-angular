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
            <h2>Spring 介绍</h2>
        </div>

        <div class="panel-body">
            <p>
                Spring 是于 2003 年兴起的一个轻量级的 Java 开发框架，它是为了解决企业应用开发的 复杂性而创建的。<br>
                Spring 的核心是控制反转(IoC)和面向切面编程(AOP)。<br>
                简单来说，Spring 是一个分层的 Java SE/EE full-stack(一站式)轻量级开源框架。<br>
            </p>

            <h4>功能概述</h4>
            <p>
                <i>Spring 的主要作用就是为代码“解耦”，降低代码间的耦合度。</i><br>
                <ul>
                    <li>根据功能的不同，可以将一个系统中的代码分为主业务逻辑与系统级业务逻辑两类。</li>
                    <li>主业务代码间逻辑联系紧密，有具体的专业业务应用场景，复用性 相对较低;</li>
                    <li>系统级业务相对功能独立， 没有具体的专业业务应用场景，主要是为主业务提供 系统级服务，如日志、安全、事务等，复用性强。</li>
                </ul>

                <br>
                <i>Spring 根据代码的功能特点，将降低耦合度的方式分为了两类:IoC 与 AOP。</i><br>
                <ul>
                    <li>IoC 控制器翻转（控制反转概念比较含糊最多理解为容器控制对象这一个层面，很难让人想到谁来维护对象关系，所以2004年大师级人物Martin Fowler又给出了一个新的名字：“依赖注入”）使得主 业务在相互调用过程中，不用再自己维护关系了，即不用再自己创建要使用的对象了。 而是 由 Spring 容器统一管理，自动“注入”</li>
                    <li>AOP 面向切面编程 （这里举一laravel 的例子） 使得系统级服务得到了最大复用，且不用再 由程序员手工将系统级服务“混杂”到主业务逻辑中了，而是由 Spring 容器统一完成“织入”。</li>
                </ul>
            </p>


            <h4>功能对比</h4>

            <p>
                <ul>
                    <li>IOC 是一种思想，和 laravel中的用法一样，我们在控制器中需要什么，直接注入即可，这里都是IOC自动注入的</li>
                    <li>AOP 也是一种思想，定义一个切入点，然后编写切入方法，有点类似 laravel Model 中的事件监听，也就是面向切面编程</li>
                </ul>
            </p>

            <h5>
                Spring 的下载地址 http://spring.io
            </h5>

        </div>

        <%@include file="../common/footer.jsp"%>
    </div>
</div>
</body>
</html>
