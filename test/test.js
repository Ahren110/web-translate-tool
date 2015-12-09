var assert = require("assert");
var Translate = require("../index.js");
var should = require('should');

describe('web-translate-tool', function(){
    describe('#new instance', function(){
        it('should get a instance successful', function(){
            var translate = new Translate('123');
            translate.should.be.an.instanceOf(Translate);
            translate.go.should.be.Function();
        });
        it('should use spercific apiKey and timeout' ,function(){
            var apiKey = '123456';
            var timeout = 10000;
            var translate = new Translate(apiKey, timeout);
            translate.should.have.property('apiKey', apiKey);
            translate.should.have.property('timeout', timeout);
        });
    });
    // describe('#go translate', function(){
    //     var translate = new Translate('982783138');
    //     it('should return an object with result', function(){
    //         translate.go('hello', function(err, data){
    //             if(!err){
    //                 data.should.be.Object().and.have.property('translation');
    //             }
    //         });   
    //     });
    // });
});