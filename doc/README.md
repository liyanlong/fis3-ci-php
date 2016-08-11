## 为什么要创建 fis-ci-php ?
[fis3](https://github.com/fex-team/fis3) 是由百度开发团队开发及维护的前端工程构建系统。主要是解决了我们前端的js,css,img的资源定位,合并,编译等等问题。

根据官方提供的 [use-php](https://github.com/fex-team/fis3-demo/tree/master/backend-resource-manage/use-php) 基础之上, 结合了php中ci框架,搭建了一个实际场合运用的骨架
****

## 文档目录

```
|- static               静态文件目录发布对外访问
    |- js
    |- css
    |- images
|- page                 php脚本,view主体
|- widget               php组件,允许包含js,css,img,php等文件
|- application          
    |- tpl              发布的php脚本地址
        |- page
        |- widget
|- public
    |- static           发布的静态文件
        |- js
        |- css
        |- images
        |- widget       
```


## fis-conf 详解

前端加载依赖 [fis3-hook-commonjs](https://github.com/fex-team/fis3-hook-commonjs) 插件
具体配置
```javascript
fis.hook('commonjs', {
    tab: 4
});
```

模块化js
```javascript
fis.match('/widget/**', {
    // 使用模块加载方案
    isMod: true,

    // isMod开启有效, 将原js用 define 包裹
    wrap: true,
    // 默认 $0 $& 表示匹配全路径
    release: '/public/static$0',

    // 支持更换域名 端口 协议
    // domain: 'http://localhost:8080'
    domain:  false
});

fis.match('/static/**', {
    isMod:false,
    release: '/public$0'
});
```
更多配置参考  [fis3-hook-commonjs](https://github.com/fex-team/fis3-hook-commonjs)

修改本地发布目录
自定义任务local
```javascript
fis.media('local').match('*', {
    deploy: fis.plugin('local-deliver', {
        // 发布地址 省略 -d path 目录
        to: '/path/to/htdocs'
    })
});
```

修改远程发布目录
参考 [fex-team/reciver](https://github.com/fex-team/receiver)

```javascript
fis.media('qa').match('*', {
  deploy: fis.plugin('http-push', {
    receiver: 'http://localhost:8999/receiver',
     to: '/home/liyl/public_html/fis-php-ci'
  })
});
```


## php入口配置
实际上，我将官方提供的例子里的`Resource.class.php`做了一个修改和封装,使得它更加融入到ci框架中。

application/libraries/FIS_Resource.php
```php
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once APPPATH . 'third_party/Baidu/Resource.class.php';

class FIS_Resource
{

    function __construct()
    {
        Baidu_FIS_Resource::setConfig(array(
            'config_dir'    => APPPATH . '/config/',
            'template_dir'  => APPPATH . '/tpl/'
        ));
    }
}
```
application/config/autoload.php
```php
<?php
# ...
$autoload['libraries'] = array('FIS_Resource');
# ...
```
