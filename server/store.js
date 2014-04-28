var db = require('mongojs').connect('test');

module.exports.store = (function(){

    return {
        getQueue: function(callback){
            var queue = db.collection('queue');
            queue.find(function(err, docs) {
                if (err) throw err;
                else callback(null, docs);
            });
        },

        getQueueByIsbn: function(isbn, callback){
          var queue = db.collection('queue');
          queue.findOne({"book.isbn": isbn}, function(err, docs) {
            if (err) throw err;
            else callback(null, docs);
          });
        },

        getBooks: function(callback){
            var queue = db.collection('books');
            queue.find(function(err, docs) {
                if (err) throw err;
                else callback(null, docs);
            });
        },

        getBookByIsbn: function(isbn, callback) {
            var books = db.collection('books');
            books.findOne({"book.isbn": isbn}, function(err, book) {
                if (err) throw err;
                else callback(null, book);
            });
        },

        updateBookQueue: function(isbn, username, callback) {
            var queue = db.collection('queue')
            queue.findAndModify({
                query: {"book.isbn": isbn},
                update: {
                          $addToSet: {queue: {username: username, date: new Date()}},
                          $set: {borrowed: true}
                },
                new: true
            }, function(err, book) {
                console.log(book)
                if (err) throw err;
                else callback(null, book);
            });
        }
    }

})();