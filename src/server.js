// Node imports
const http = require('http');
const url = require('url');
// Local imports
const htmlHandler = require('./htmlResponses.js');
const responseHandler = require('./requestResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  const parsedUrl = url.parse(request.url);

  switch (parsedUrl.pathname) {
    case '/style.css':
      htmlHandler.getCSS(request, response);
      break;
    case '/':
      htmlHandler.getIndex(request, response);
      break;
    case '/client.html':
      htmlHandler.getIndex(request, response);
      break;
    case '/success':
      responseHandler.getSuccess(request, response);
      break;
    case '/badRequest':
      responseHandler.getBadRequest(request, response);
      break;
    case '/unauthorized':
      responseHandler.getUnauthorized(request, response);
      break;
    case '/forbidden':
      responseHandler.getForbidden(request, response);
      break;
    case '/internal':
      responseHandler.getInternal(request, response);
      break;
    case '/notImplemented':
      responseHandler.getNotImplemented(request, response);
      break;
    default: // 404 not found
      responseHandler.getNotFound(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
