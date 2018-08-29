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
            <h2>首页使用的是Java JSP 展示</h2>
        </div>
        <div class="panel-body">
            <p>JSP 同样是由后台输出变量，页面输出</p>

            <p>变量输出演示</p>
            <span> ${paramStr} </span>

            <p>Map 数据展示</p>

            <ul>
                <li>姓名 ：${paramMap.name} </li>
                <li>性别 ：${paramMap.sex} </li>
                <li>年龄 ：${paramMap.age} </li>
            </ul>

            <p>数组变量演示</p>
            <ul>
                <c:forEach var="paramData" items="${paramArray}">
                    <li>${paramData}</li>
                </c:forEach>
            </ul>

            <p>目录结构展示</p>
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
                    <td>与数据打交道，可以是数据库操作，也可以是文件读写操作，甚至是redis缓存操作，总之与数据操作有关的都放在这里，也有人叫做dal或者数据持久层都差不多意思。为什么没有daoImpl，因为我们用的是mybatis，所以可以直接在配置文件中实现接口的每个方法。</td>
                </tr>
                <tr>
                    <td>src/main/java/entity 实体类</td>
                    <td>一般与数据库的表相对应，封装dao层取出来的数据为一个对象，也就是我们常说的pojo，一般只在dao层与service层之间传输。</td>
                </tr>
                <tr>
                    <td>src/main/java/dto 数据传输层</td>
                    <td>刚学框架的人可能不明白这个有什么用，其实就是用于service层与web层之间传输，为什么不直接用entity（pojo）？其实在实际开发中发现，很多时间一个entity并不能满足我们的业务需求，可能呈现给用户的信息十分之多，这时候就有了dto，也相当于vo，记住一定不要把这个混杂在entity里面</td>
                </tr>
                <tr>
                    <td>src/main/java/service 逻辑（接口）</td>
                    <td>写我们的业务逻辑，也有人叫bll，在设计业务接口时候应该站在“使用者”的角度</td>
                </tr>
                <tr>
                    <td>src/main/java/service/impl 业务逻辑（实现)</td>
                    <td>实现我们业务接口，一般事务控制是写在这里</td>
                </tr>
                <tr>
                    <td>web 控制器</td>
                    <td>springmvc就是在这里发挥作用的，一般人叫做controller控制器</td>
                </tr>
                <tr>
                    <td>src/main/resources</td>
                    <td>存放资源文件，譬如各种的spring，mybatis，log配置文件。</td>
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
                    <td>这个貌似是最熟悉的目录了，用来存放我们前端的静态资源，如jsp js css。</td>
                </tr>
                <tr>
                    <td>src/main/webapp/resources</td>
                    <td>这里的资源是指项目的静态资源，如js css images等。</td>
                </tr>
                <tr>
                    <td>src/main/webapp/WEB-INF</td>
                    <td>很重要的一个目录，外部浏览器无法访问，只有羡慕内部才能访问，可以把jsp放在这里，另外就是web.xml了~</td>
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

            <p>小技巧</p>
            <ul>
                <li>模板当中同样含有关键字，例如 在循环数组的时候我使用了 param 作为变量，数组始终不出现</li>
                <li>模板文件一般放到 WEB-INF/jsp 下，目的是外接无法访问到 jsp 模板文件,否则通过目录可以直接访问没有经过脚本处理的模板文件 </li>
                <li>mybatis需要配置的 dao,entity,map 手写很容易出现错乱，可使用 mybatis-generator-core 工具</li>
            </ul>

            <p>
                <a href="/angular/index/mybatis"> Mybatis 介绍 </a>
            </p>

            <p>
                <a href="127.0.0.1:9501">查看Angular项目</a>
            </p>

        </div>
    </div>
</div>
</body>
</html>
