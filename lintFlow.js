const fetch = require('node-fetch');

let lintFlow = async function (ignoreWarnings, flowFile) {
  const flow = require(flowFile);
  console.log("Inside of lintFlow()")

  const url = 'http://35.167.90.132:8000/linter/lint-flow-json';
  const requestBody = {
    key1: 'value1',
    key2: 'value2',
  };

  // console.log(flow);
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ flowJSON: flow }),
  };

  let rawResult = {};

  await fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
      // console.log('Response:', data);
      rawResult = data;
      // Handle the response data
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle the error
    });

  console.log(rawResult);

  return rawResult;
};

module.exports = lintFlow;