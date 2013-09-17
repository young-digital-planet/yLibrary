var db = require('mongojs').connect('test');
var store = require("../server/store").store;

var assert = require("assert")
describe('Store', function(){
    it("count all available books", function(done){
        store.getQueue(function(error, queue){
            assert.equal(23, queue.length)
            done()
        })
    })

})