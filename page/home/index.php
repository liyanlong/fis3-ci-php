<!DOCTYPE html>
<html>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>FIS3 Pure PHP DEMO</title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <!-- 使用modjs作为资源加载器 -->
        <?php framework('static/js/mod.js'); ?>
        <!-- 加载css -->
        <?php import('static/css/tooplate_style.css'); ?>
        <?php import('static/css/coda-slider.css'); ?>
        <!-- 标记css输出位置 -->
        <?php placeholder('css');?>
        <!-- 加载同步的js -->
        <?php import('static/js/jquery-1.2.6.js'); ?>
    </head>

    <?php scriptStart(); ?>
    <script type="text/javascript">
      require.async('widget/header/header.js',function(header){
            console.log(header);
      })
    </script>
    <?php scriptEnd(); ?>
    <body>
        <?php widget("widget/header/header.php"); ?>
        <?php echo 'Hello World';?>
    </body>
    <!-- js输出位置，放在底部加快页面解析 -->
    <?php placeholder('js'); ?>
</html>
