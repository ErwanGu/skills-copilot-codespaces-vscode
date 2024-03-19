// Create web server
// 1. Create a new file named comments.js in the routes folder.
// 2. Add the following code to comments.js:
// 3. Use the router object to define the comments route.
// 4. Use the res.json() method to send the comments array as a JSON response.

// Import the express module
var express = require('express');

// Create a new Router
var router = express.Router();

// Define the route for comments
router.get('/', function(req, res) {
    res.json(comments);
});

// Export the router
module.exports = router;

// Path: index.js
// Create web server
// 1. Add the following code to index.js:
// 2. Use the app.use() method to use the comments route.

// Import the express module
var express = require('express');
var commentsRouter = require('./routes/comments');

// Create a new express application
var app = express();

// Use the comments router for the /comments route
app.use('/comments', commentsRouter);

// Start the server
app.listen(3000, function() {
    console.log('Server is listening on port 3000');
});

// Run the server
// 1. Run the server using the following command:
// node index.js
// 2. Open your web browser and go to http://localhost:3000/comments to see the comments array as a JSON response.

// Path: comments.js
// Create web server
// 1. Add the following code to comments.js:
// 2. Use the res.json() method to send the comments array as a JSON response.

// Import the express module
var express = require('express');
var comments = require('../data/comments');

// Create a new Router
var router = express.Router();

// Define the route for comments
router.get('/', function(req, res) {
    res.json(comments);
});

// Export the router
module.exports = router;

// Path: index.js
// Create web server
// 1. Add the following code to index.js:
// 2. Use the app.use() method to use the comments route.

// Import the express module
var express = require('express');
var commentsRouter = require('./routes/comments');

// Create a new express application
var app = express();

// Use the comments router for the /comments route
app.use('/comments', commentsRouter);

// Start the server
app.listen(