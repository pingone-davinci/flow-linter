const core = require('@actions/core');
const github = require('@actions/github');
const lintFlow = require('./lintFlow');

try {
  // Get the inputs
  const ignoreWarnings = core.getInput('ignore-warnings');
  const flows = core.getInput('flows');

  // Debug
  console.log(`Running with flows = `, flows);
  console.log(`Running with ignoreWarnings = `, ignoreWarnings);
  console.log("About to lint flow");

  const rawResults = lintFlow(false, flows);

  console.log(rawResults);

  core.setOutput("pass", true);
  core.setOutput("warnings", "Not Set");
  core.setOutput("errors", "Not Set");
  core.setOutput("raw-results", "Not Set");


  // const time = (new Date()).toTimeString();
  // core.setOutput("time", time);
  // // Get the JSON webhook payload for the event that triggered the workflow
  const context = JSON.stringify(github.context, undefined, 2)
  console.log(`The event payload: ${context}`);
} catch (error) {
  core.setFailed(error.message);
}
