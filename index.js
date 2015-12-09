var jsonp = require("jsonp");
module.exports = function (apiKey, timeout) {
    timeout = timeout || 5000;
    this.apiKey = apiKey;
    this.timeout = timeout;
    this.url = "https://fanyi.youdao.com/openapi.do?keyfrom=pohome&key="
                    +this.apiKey+
                    "&type=data&doctype=jsonp&version=1.1&q=";
    this.go = function (keywords, callback) {
        if(!this.apiKey) {
            callback(new Error("need apikey"));
            return;
        }
        if(!keywords){
            callback(new Error("no keywords"));
            return;
        }
        var opt = {
            timeout: this.timeout,
            name: 'callback'
        };
        jsonp(this.url+keywords, opt, function(err, res) {
            if(err) {
                callback(err);
                return;
            }
            callback(null, res);
        });
    };
    return this;
}
