module.exports = function(app, store) {

    app.get('/rest/queue', function(req, res){
        store.getQueue(function(error, docs) {
            res.json(docs);
        });
    });

    app.get('/rest/book/:isbn', function(req, res) {
        store.getBookByIsbn(req.params.isbn, function(error, book) {
            res.json(book);
        });
    });

}