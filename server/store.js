var mongojs = require('mongojs');

module.exports.store = (function(){

    var db = mongojs('test');

    return {
        getQueue: function(callback){
            var queue = db.collection('queue');
            queue.find(function(err, docs) {
                if (err) throw err;
                else callback(null, docs);
            });
        },

        getBookByIsbn: function(isbn, callback) {
            var books = db.collection('books');
            books.find({"book.isbn": isbn}, function(err, book) {
                if (err) throw err;
                else callback(null, book);
            })
        }
    }

})();