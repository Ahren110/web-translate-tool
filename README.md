# web-translate-tool
这是一个简单的前端翻译js库, 基于jsonp,是对[有道翻译api](http://fanyi.youdao.com/openapi?path=data-mode)的封装.

**使用前需要先[申请有道翻译apikey](http://fanyi.youdao.com/openapi?path=data-mode)**

这里有一个[DEMO](http://hu-zhi-hang.github.io/web-translate-tool/)
## 安装
`npm install web-translate-tool`
## 使用
使用script标签:

    <script src="node_modules/web-translate-tool/dist/web-translate-tool.js"></script>
    <script>
        var translate = new Translate(your-apikey, timeout);
        translate.go(keywords, function(err, res) {
            if(!err) {
                ....
            }
        });
    </script>
在webpack中使用:

    <script>
        var Translate = require("web-translate-tool");
        var translate = new Translate(your-apikey, timeout);
        translate.go(keywords, function(err, res) {
            if(!err) {
                ....
            }
        });
    </script>
    