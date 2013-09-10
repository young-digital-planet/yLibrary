var results = db.books.aggregate({
	$project: { 
		_id: 1, 
		book: {
			isbn: "$book.isbn", 
			title: "$book.title",
			authors: "$book.authors",
			image_url: "$book.image_url"
			},
		borrowed: {"$ifNull": ["$borrowed", false]},
		}
	});

db.queue.insert(results.result);
