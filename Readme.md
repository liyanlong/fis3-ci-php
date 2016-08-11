# 基于CI框架的 fis-php 打包管理方案 demo

## 安装 fis

```javascript
npm install -g fis3
npm install
```

## 测试

需要有本地 php-cgi + node环境

```javascript
npm install -g fis3-php
fis3 release
fis3 server start --type php
```

## 修改默认发布地址

```javascript
fis.media('local').match('*', {
  deploy: fis.plugin('local-deliver', {
    to: '/path/to/web_root/'
  })
});
```

发布命令 `fis3 release local`

## 发布远程环境

参考 [fex-team/receiver](https://github.com/fex-team/receiver) nodejs 版本的同步工具

```javascript
fis.media('qa').match('*', {
  deploy: fis.plugin('http-push', {
     receiver: 'http://ip:port/receiver',
     to: '/path/to/web_root/'
  })
});
```
