//模块化方案，本项目选中CommonJS方案(同样支持异步加载哈)
// npm install fis3-hook-commonjs
fis.hook('commonjs', {
    tab: 4
    // 配置项
    // forwardDeclaration: true,
    // skipBuiltinModules: false
});

// 某些资源从构建中去除
fis.set('project.ignore',[
    'application/**',
    'system/**',
    'user_guide/**',
    '.DS_Store',
    '.htaccess',
    'composer.json',
    'contributing.md',
    'license.txt',
    'readme.rst',
    'node_modules/**',
    'public/**',
    'Readme.md',
    'package.json'
]);

// widget发布时产出到 /static目录下
fis.match('/widget/**', {
    isMod : true,
    release: '/public/static$0',
    domain: 'http://192.168.41.104/~liyl/fis-php-ci'
//    url: '/fis-demo/public/static$0'
});

// 发布 static 文件
fis.match('/static/**', {
    isMod:false,
    release: '/public$0',
    domain: 'http://192.168.41.104/~liyl/fis-php-ci'
});

// umd2commonjs
fis.match('/static/js/jquery-3.1.0.js', {
    umd2commonjs: true,
    isMod: true
});

// 匹配依赖文件
fis.match('/map.json',{
    release: '/application/config/map.json'
});

// 组件页面
fis.match("/{page,widget}/**.php",{
    isMod : true,
    isHtmlLike : true,
    domain: false,
    url: '$&', //此处注意，php加载的时候已带tpl目录，所以路径得修正
    release: '/application/tpl$&'
});

// 上传远程服务器
fis.media('qa').match('*', {
  deploy: fis.plugin('http-push', {
    receiver: 'http://192.168.41.104:8999/receiver',
     to: '/home/liyl/public_html/fis-php-ci'
  })
});

// 本地发布
fis.media('local').match('*', {
  deploy: fis.plugin('local-deliver', {
    to: 'D:\\Users\\liyl\\AtomProject\\fis3-php-ci'
  })
});
