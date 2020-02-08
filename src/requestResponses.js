const url = require('url');
const formatHandler = require('./responseFormatting.js');

const getSuccess = (request, response) => {
  const output = {
    message: 'This is a successful response.',
  };
  return formatHandler.respondFormatted(request, response, 200, output);
};

const getBadRequest = (request, response) => {
  const queryObj = url.parse(request.url, true).query;
  // default to failure, will be corrected if ?valid=true is present
  let code = 400;
  let output = {
    message: 'Missing valid query parameter set to true.',
    id: 'badRequest',
  };
    // if valid, change properties to be successful
  if (queryObj.valid === 'true') {
    code = 200;
    output = {
      message: 'This request has the required parameters.',
    };
  }

  return formatHandler.respondFormatted(request, response, code, output);
};

const getUnauthorized = (request, response) => {
  const queryObj = url.parse(request.url, true).query;
  // default to failure, will be corrected if ?loggedIn=yes is present
  let code = 401;
  let output = {
    message: 'Missing loggedIn query parameter set to yes.',
    id: 'unauthorized',
  };
    // if valid, change properties to be successful
  if (queryObj.loggedIn === 'yes') {
    code = 200;
    output = {
      message: 'You have successfully viewed the content.',
    };
  }
  return formatHandler.respondFormatted(request, response, code, output);
};

const getForbidden = (request, response) => {
  const output = {
    message: 'You do not have access to this content.',
    id: 'forbidden',
  };
  return formatHandler.respondFormatted(request, response, 403, output);
};

const getInternal = (request, response) => {
  const output = {
    message: 'Internal Server Error. Something went wrong.',
    id: 'internalError',
  };
  return formatHandler.respondFormatted(request, response, 500, output);
};

const getNotImplemented = (request, response) => {
  const output = {
    message: 'A get request for this page has not been implemented yet. Check again later for updated content.',
    id: 'notImplemented',
  };
  return formatHandler.respondFormatted(request, response, 501, output);
};

const getNotFound = (request, response) => {
  const output = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };
  return formatHandler.respondFormatted(request, response, 404, output);
};

module.exports = {
  getSuccess,
  getBadRequest,
  getUnauthorized,
  getForbidden,
  getInternal,
  getNotImplemented,
  getNotFound,
};
