var http = require('http'),
  fs = require('fs'),
  requests = 1;

var server = http.createServer( function(request, response) {
  if ( request.url === '/' ) {
    fs.createReadStream('./index.html').pipe(response);
    console.log('Request #' + requests +' came through!');
    requests++;
  };
  if ( request.url.indexOf('.css') != -1 ) {
    fs.readFile( './style.css', function(error, data) {
      if(error){ console.log(error) }
      response.writeHead(200, {'Content-Type': 'text/css'});
      response.write(data);
      response.end();
    });
  };
});

server.listen(1337);
console.log('Node server running on port 1337... Press Ctrl+C to stop.');
