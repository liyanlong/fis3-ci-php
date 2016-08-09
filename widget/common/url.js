/**
 * @require static/js/jquery-1.2.6.js
 */
function parseQuery (query) {
    // TODO 将字符串转换为  key => value 对象

    return {};
}

var param = parseQuery(window.location.href);

exports.get = function () {
    console.log(param);
};
