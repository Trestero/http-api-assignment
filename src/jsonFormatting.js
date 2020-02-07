// Helper function for formatting a JSON object as a string to put in an HTTP response
// A bit simpler than the XML equivalent because of JSON.stringify

// Given a JS object, outputs it as a JSON-formatted string
const formatResponseAsJSON = (content) => {
  const formattedString = JSON.stringify(content);

  return formattedString;
};

// Module exports
module.exports = {
  formatResponseAsJSON,
};
