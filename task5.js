const http = require('http');
const url = require('url');
const data = require('./users.json')


// Create HTTP server
const server = http.createServer((req, res) => {

  // Parse the URL to extract the path and query parameters
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const queryParams = parsedUrl.query;

  // Handle different HTTP methods
  switch (req.method) {
    case 'GET':
      // Handle GET requests
      if (pathname === '/users') {
        // Retrieve all users
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
      } else if (pathname.startsWith('/users/')) {
        // Retrieve a specific user by ID
        const userId = parseInt(pathname.substring('/users/'.length));
        const user = data.find(user => user.id === userId);
        if (user) {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(user));
        } else {
          res.statusCode = 404;
          res.end('User not found');
        }
      } else {
        res.statusCode = 404;
        res.end('Not found');
      }
      break;

    case 'POST':
      // Handle POST requests
      if (pathname === '/users') {
        // Create a new user
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        req.on('end', () => {
          const newUser = JSON.parse(body);
          newUser.id = data.length + 1;
          data.push(newUser);
          res.statusCode = 201;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(newUser));
        });
      } else {
        res.statusCode = 404;
        res.end('Not found');
      }
      break;

    case 'PUT':
      // Handle PUT requests
      if (pathname.startsWith('/users/')) {
        // Update an existing user
        const itemId = parseInt(pathname.substring('/users/'.length));
        const itemIndex = data.findIndex(item => item.id === itemId);
        if (itemIndex !== -1) {
          let body = '';
          req.on('data', chunk => {
            body += chunk.toString();
          });
          req.on('end', () => {
            const updatedUser = JSON.parse(body);
            data[itemIndex] = updatedUser;
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(updatedUser));
          });
        } else {
          res.statusCode = 404;
          res.end('Item not found');
        }
      } else {
        res.statusCode = 404;
        res.end('Not found');
      }
      break;

    case 'DELETE':
      // Handle DELETE requests
      if (pathname.startsWith('/users/')) {
        // Delete an existing user
        const itemId = parseInt(pathname.substring('/users/'.length));
        const itemIndex = data.findIndex(item => item.id === itemId);
        if (itemIndex !== -1) {
          data.splice(itemIndex, 1);
          res.statusCode = 200;
          res.end('User deleted');
        } else {
          res.statusCode = 404;
          res.end('User not found');
        }
      } else {
        res.statusCode = 404;
        res.end('Not found');
      }
      break;

    default:
      res.statusCode = 405;
      res.end('Method not allowed');
  }
});

// Start the server
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});