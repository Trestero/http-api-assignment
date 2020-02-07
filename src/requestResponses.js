const formatHandler = require('./responseFormatting.js');

const getSuccess = (request, response) => {
  const output = {
    message: 'This is a successful response.',
  };
  return formatHandler.respondFormatted(request, response, 200, output);
};

const getBadRequest = (request, response) => {
  // default to failure, will be corrected if ?valid=true is present
  const code = 400;
  const output = {
    message: 'Missing valid query parameter set to true.',
    id: 'badRequest',
  };
  return formatHandler.respondFormatted(request, response, code, output);
};

const getUnauthorized = (request, response) => {
  // default to failure, will be corrected if ?loggedIn=yes is present
  const code = 400;
  const output = {
    message: 'Missing loggedIn query parameter set to yes.',
    id: 'unauthorized',
  };
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
