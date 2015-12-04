var jsonp = require("jsonp");
module.exports = function (apiKey, timeout) {
    this.apiKey = apiKey;
    this.timeout = timeout;
    this.url = "https://fanyi.youdao.com/openapi.do?keyfrom=pohome&key="
                    +this.apiKey+
                    "&type=data&doctype=jsonp&callback=callback&version=1.1&q=";
    this.go = function (keywords, callback) {
        var opt = {
            timeout: this.timeout,
            name: 'callback'
        };
        jsonp(this.url+keywords, opt, function(err, res){
            if(err){
                callback(err);
                return;
            }
            callback(null, res);
        });
    };
    return this;
}
