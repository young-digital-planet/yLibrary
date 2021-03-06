yLibrary
========

yLibrary - simple library manager based on MongoDB, node and Angular

Import process
--------------

    cd import
    python goodreads.py


The scripts reads the latest shelf information from [http://goodreads.com](http://goodreads.com) and dumps them to sysout as json

You can import sample data from the data/ folder directly to the mongodb


    cd import/data
	mongoimport --collection books < books.json 
    mongo import.js


The first command loads sample books data into the **db.books** collection, while the latter agregates basic book information, add borrowed information and populated **db.queue** collection


Running the example
-------------------

Assuming you have [node.js](http://nodejs.org/) and already installed, run:


    cd yLibrary
	npm install
	node server.js


The server is operating under [http://localhost:3000](http://localhost:3000)


Running tests
-------------

Test suit is using mocha. To run tests install mocha globally as follows

	npm install -g mocha
	mocha


So far, test assume mongodb is running in the background with default data
