//模块化方案，本项目选中CommonJS方案(同样支持异步加载哈)
// npm install fis3-hook-module  fis3-hook-commonjs
fis.hook('module', {
  mode: 'commonJs'
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
    'public/**'
]);


// widget发布时产出到 /static目录下
fis.match('/widget/**', {
    isMod : true,
    release: '/public/static/$0',
    url: '/fis-demo/public/static$0'
});

// 发布 static 文件
fis.match('/static/**', {
    isMod : false,
    release: '$0',
    url: '/fis-demo/public$0'
});

// 匹配依赖
fis.match('/map.json',{
    release: '/application/config/map.json'
})

// 组件页面
fis.match("/{page,widget}/**.php",{
    isMod : true,
    isHtmlLike : true,
    url: '$&', //此处注意，php加载的时候已带tpl目录，所以路径得修正
    release: '/application/tpl/$&'
});

// 开启组件同名依赖
// 加载了 header.php 组件 可以加载 同名的 header.css , header.js
fis.match('*.{html,js,php}', {
  useSameNameRequire: true
});
