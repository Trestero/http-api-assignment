// Helper functions convert a JS object into appropriate format, returned as a string


// Given a JS Object, outputs it as an XML-formatted string
const formatResponseAsXML = (content) => {
  let responseXML = '<response>';

  // include message
  if (content.message) {
    responseXML = `${responseXML} <message>${content.message}</message>`;
  }
  if (content.id) {
    responseXML = `${responseXML} <id>${content.id}</id>`;
  }

  responseXML = `${responseXML} </response>`;

  return responseXML;
};

// Given a JS object, outputs it as a JSON-formatted string
const formatResponseAsJSON = (content) => {
  const formattedString = JSON.stringify(content);

  return formattedString;
};

const respondFormatted = (request, response, status, content) => {
  // Format the message body first


  const acceptedTypes = request.headers.accept.split(',');
  let contentType = 'application/json';
  let responseText = null;

  if (acceptedTypes[0] === 'application/json') {
    responseText = formatResponseAsJSON(content);
  } else if (acceptedTypes[0] === 'text/xml') {
    responseText = formatResponseAsXML(content);
    contentType = 'text/xml';
  } else { // default to JSON
    responseText = formatResponseAsJSON(content);
  }

  // Send back the response
  response.writeHead(status, { 'Content-Type': contentType });
  response.write(responseText);
  response.end();
};


module.exports = {
  respondFormatted,
};
