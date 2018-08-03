## 简单的ssm 框架 和 angular 整合

### 前置条件
```
node npm angular mysql tomcat 
```

### sql 建表语句
### 建库
```
create database angular;
```

### 建表
```
use angular;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  `email` varchar(255) NOT NULL DEFAULT '',
  `phone` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;  
```

### 开启angular
``` 
cd angular
ng serve --port 4201
```

### tomcat 项目为 angular

### 请求地址 http://localhost:4201/index
打开console 查看网络请求是否完成

