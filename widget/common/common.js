/*
 * 当加载该模块时，提前将依赖文件加载进来
 * 如果未写依赖 会读取 文件中存在的require 模块id做为依赖的模块
 */

var $ = require('static/js/jquery-3.1.0.js');
console.log('this is url', $.fn);
exports.version = '1.1.0';
