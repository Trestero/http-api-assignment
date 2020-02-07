// Helper function for formatting responses as XML in a string

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

module.exports = {
  formatResponseAsXML,
};
