// domain/.netlify/functions/hello

const items = [];

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: "Hello World",
  };
};
