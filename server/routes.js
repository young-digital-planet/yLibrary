module.exports = function(app, store) {

    app.get('/rest/queue', function(req, res){
        store.getQueue(function(error, docs) {
            res.json(docs);
        });
    });

    //curl -XPOST -H "Content-Type: application/json" -d '{"username": "jmarchwicki"}' http://localhost:3000/rest/queue/9780470084113
    app.post('/rest/queue/:isbn', function(req, res) {
        var isbn = req.params.isbn;
        var username = req.body.username;

        store.updateBookQueue(isbn, username, function(error, bookQueue) {
            res.json(bookQueue);
        });
    });

    app.get('/rest/book/:isbn', function(req, res) {
        store.getBookByIsbn(req.params.isbn, function(error, book) {
            res.json(book);
        });
    });

}